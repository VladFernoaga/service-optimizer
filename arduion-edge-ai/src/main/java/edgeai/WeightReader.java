package edgeai;

public interface WeightReader {

	int[][] getWeightsHiddenLayer1();
	int[][] getWeightsHiddenLayer2();
	int[][] getWeightsOuputLayer();
	Statistic[] getParameterStatistic();
}
