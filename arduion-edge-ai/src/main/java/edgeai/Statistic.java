package edgeai;

public class Statistic {
	final String paramName;
	final double mean;
	final double std;
	
	public Statistic(String paramName, double mean, double std) {
		super();
		this.paramName = paramName;
		this.mean = mean;
		this.std = std;
	}
}
