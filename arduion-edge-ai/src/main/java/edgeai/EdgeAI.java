package edgeai;

import java.util.Random;
import org.sintef.jarduino.InvalidPinTypeException;
import org.sintef.jarduino.JArduino;

public class EdgeAI extends JArduino {
	private WeightReader wReader = new LocalWeightReader();
	// Read the weights for hidden layer1 already containing the additional bias
	// parameters
	double[][] layer1Weights = wReader.getWeightsHiddenLayer1();
	// Read the weights for hidden layer2 already containing the additional bias
	// parameters
	double[][] layer2Weights = wReader.getWeightsHiddenLayer2();
	// Read the weights for output already containing the additional bias parameters
	double[][] outputLayerWeights = wReader.getWeightsOutputLayer();
	Statistic[] statistics = wReader.getParameterStatistic();

	@Override
	protected void loop() throws InvalidPinTypeException {
		// Run prediction using randomized inputs between range [0, 4095]
		double[][] inputParams = getRandomizedInputParams();
		// Print normalized inputs
		System.out.println("Normalized");
		System.out.println(inputParams[0][0]);
		System.out.println(inputParams[1][0]);
		System.out.println(inputParams[2][0]);
		// Print denormalized inputs
		System.out.println("Denormalized");
		System.out.println((inputParams[0][0] * statistics[0].std) + statistics[0].mean);
		System.out.println((inputParams[1][0] * statistics[1].std) + statistics[1].mean);
		System.out.println((inputParams[2][0] * statistics[2].std) + statistics[2].mean);
		double prediction = runPrediction(inputParams);
		// Print normalized prediction
		System.out.println("Normalized output");
		System.out.println(prediction);
		// Print denormalized prediction
		System.out.println("Denormalized output");
		System.out.println(prediction * statistics[3].std + statistics[3].mean);
	}

	double runPrediction(double[][] inputParams) {
		// Run activations on first layer
		double[][] outputLayer1 = multiply(inputParams, layer1Weights);
		applyRelu(outputLayer1);
		
		outputLayer1 =extendRowBy1(outputLayer1);
		outputLayer1[outputLayer1.length-1][0]=1;
		
		// Run Activations on second layer
		double[][] outputLayer2 = multiply(outputLayer1, layer2Weights);
		applyRelu(outputLayer2);
		
		outputLayer2 =extendRowBy1(outputLayer2);
		outputLayer2[outputLayer2.length-1][0]=1;
		
		double predictionResult = multiply(outputLayer2, outputLayerWeights)[0][0];
		return predictionResult;
	}

	private void applyRelu(double activations[][]) {
		for (int row = 0; row < activations.length; row++) {
			for (int col = 0; col < activations[row].length; col++) {
				activations[row][col] = activations[row][col] < 0 ? 0 : activations[row][col];
			}
		}
	}

	private double[][] multiply(double[][] input, double[][] currentLayerWeights) {
		double[][] result = new double[currentLayerWeights.length][input[0].length];

		for (int row = 0; row < result.length; row++) {
			for (int col = 0; col < result[row].length; col++) {
				result[row][col] = multiplyMatricesCell(input, currentLayerWeights, row, col);
			}
		}
		
		return result;
	}
	
	private double[][] extendRowBy1(double[][] mat){
		double[][] result = new double[mat.length+1][mat[0].length];
		for(int i =0; i<mat.length;i++) {
			for(int j=0; j< mat[i].length;j++) {
				result[i][j]= mat[i][j];
			}
		}
		return result;
	}

	private double multiplyMatricesCell(double[][] mat1, double[][] mat2, int row, int col) {
		double cell = 0;
		for (int i = 0; i < mat1.length; i++) {
			cell += mat1[i][col] * mat2[row][i];
		}
		return cell;
	}

	private double[][] getRandomizedInputParams() {
		double[][] inputParam = new double[4][1];
		inputParam[0][0] = (double)(new Random().nextInt(4095) - 2048) / 2048; // PE
		inputParam[1][0] = (double)(new Random().nextInt(4095) - 2048) / 2048; // RPM
		inputParam[2][0] = (double)(new Random().nextInt(4095) - 2048) / 2048; // delta_p
		inputParam[3][0] = 1; // Bias
		return inputParam;
	}

	@Override
	protected void setup() throws InvalidPinTypeException {

	}

	public static void main(String[] args) throws InvalidPinTypeException {
		new EdgeAI().loop();
	}
}
