package ro.unitbv;

public interface WeightReader {

	double[][] getWeightsHiddenLayer1();
	double[][] getWeightsHiddenLayer2();
	double[][] getWeightsOutputLayer();
	Statistic[] getParameterStatistic();
}
