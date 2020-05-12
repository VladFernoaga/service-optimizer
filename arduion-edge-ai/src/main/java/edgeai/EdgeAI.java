package edgeai;

import java.util.Random;

import org.sintef.jarduino.InvalidPinTypeException;
import org.sintef.jarduino.JArduino;

public class EdgeAI extends JArduino {

	private WeightReader wReader = new HTTTPWeightReader();

	// Read the weights for hidden layer1 already containing the additional bias
	// parameters
	int[][] layer1Weights = wReader.getWeightsHiddenLayer1();
	// Read the weights for hidden layer2 already containing the additional bias
	// parameters
	int[][] layer2Weights = wReader.getWeightsHiddenLayer2();
	// Read the weights for output already containing the additional bias parameters
	int[][] outputlayerWeights = wReader.getWeightsOuputLayer();

	@Override
	protected void loop() throws InvalidPinTypeException {
		// Run prediction using randomized inputs between range [0, 4095]
		int[][] inputParams = getRandomizedInputParams();
		
		// Print denormalized inputs
		
		// Print normalized inputs
		
		int prediction = runPrediciton(inputParams);
		
		// Print denormalized prediction
		
		// Print normalized prediction
	}

	@Override
	protected void setup() throws InvalidPinTypeException {

	}

	int runPrediciton(int[][] inputParams) {
		// Run activations on first layer
		int[][] outputLayer1 = multiply(inputParams, layer1Weights);
		applyRelu(outputLayer1);

		// Run Activations on second layer
		int[][]  outputLayer2 = multiply(outputLayer1, layer2Weights);
		applyRelu(outputLayer2);
		
		int predictionResult = multiply(outputLayer2, outputlayerWeights)[0][0];
		
		return predictionResult;
	}

	private void applyRelu(int activations[][]) {
		for (int row = 0; row < activations.length; row++) {
			for (int col = 0; col < activations[row].length; col++) {
				activations[row][col] = activations[row][col] < 0 ? 0 : activations[row][col];
			}
		}
	}

	private int[][] multiply(int[][] input, int[][] currentLayerWeights) {
		int[][] result = new int[input.length][currentLayerWeights[0].length];

		for (int row = 0; row < result.length; row++) {
			for (int col = 0; col < result[row].length; col++) {
				result[row][col] = multiplyMatricesCell(input, currentLayerWeights, row, col);
			}
		}
		return result;
	}

	private int multiplyMatricesCell(int[][] mat1, int[][] mat2, int row, int col) {
		int cell = 0;
		for (int i = 0; i < mat2.length; i++) {
			cell += mat1[row][i] * mat2[i][col];
		}
		return cell;
	}

	private int[][] getRandomizedInputParams() {
		int[][] inputParam = new int[4][1];
		inputParam[0][0] = new Random().nextInt(4095); // PE
		inputParam[1][0] = new Random().nextInt(4095); // ...
		inputParam[2][0] = new Random().nextInt(4095); // ..
		inputParam[3][0] = new Random().nextInt(4095); // Bias
		return inputParam;
	}

}
