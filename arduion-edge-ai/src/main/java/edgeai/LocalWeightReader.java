package edgeai;

public class LocalWeightReader implements WeightReader {

	@Override
	public double[][] getWeightsHiddenLayer1() {
		double[][] data = {
			{-0.30321014, 0.48308271, 0.25297660, 0.39251530},
			{-0.84994215, -0.17327735, -0.16324116, -0.49364763},
			{0.29243162, 0.84420854, -0.19329895, -0.02569903}, 
			{0.63951355, 0.82378846, 0.00756733, 0.33233547},
			{0.58323592, 0.20014632, 0.20934840, 0.30359259},
			{-0.36867115, -0.41698304, -0.38589713, -0.72466844},
			{-0.78919530, 0.56814831, 0.08875681,-0.91648602},
			{-0.29426566, -0.89968902, 0.35328960, 0.07308862},
			{1.60851514, 1.13826382, -0.02011080, -1.26739252},
			{0.25597405, -0.75608730, 0.35559714, -0.40609112}
		};
		return data;
	}

	@Override
	public double[][] getWeightsHiddenLayer2() {
		double[][] data = {
			{-0.76759207, -0.02878503, -0.24057920, -1.31637216, -0.38250229, 0.38831952, 0.73876989, 0.00530647, -0.24236922, 0.32432157,0.24249171 },
			{-0.51918733, -0.41936797, 0.05563442, 0.22529782, 0.29671416, 0.21516481, 0.24834079, 0.03139675, 0.58326906, 0.51273346,0.42403743 },
			{0.05290249, -0.22619930, -0.14414014, -0.18371987, 0.05094653, -0.02448323, -0.20918040, -0.11999589, 0.02990004, 0.07600066, -0.30140501},
			{-0.31998563, 0.25473261, 0.13968308, 0.06164651, 0.03442455, -0.63636839, -0.09791303, -0.51748252, 0.45306975, -0.12329932, 0.45096385},
			{0.22728294, -0.32732943, -0.01251355, -0.30156675, 0.30705345, -0.24257818, 0.17266399, 0.00115736, 0.41692623, -0.28378084, 0.01839307},
			{-0.62141818, -0.41927767, -0.33168405, -0.29198557, 0.36700246, -0.13612007, -0.15680437, 0.71617407, 0.21613275, 0.04624758, 0.00418946},
			{0.07617725, 0.19418998, -0.30203667, 0.07335228, -0.05825989, -0.17968486, 0.21520650, -0.14883451, -0.32037309, -0.21357869,0.57670671 },
			{-0.19365969, 0.39373630, 0.05294788, -0.46456677, -0.18124920, -0.39867407, 0.47819233, -0.19042942, 0.25122091, 0.06486067, -0.18191521 },
			{0.91773778, 0.17568730, -0.24953862, -0.34541523, -0.43670264, 0.20858170, 0.12042996, 0.30507958, -1.50348127, -0.10420451,0.62970126 },
			{1.22774959, -0.67459357, 0.16695778, -0.22227509, -0.03765746, -0.01835396, -0.56182742, 0.09684806, -0.75842750, -0.37236056, -0.04700999},
		};
		return data;
	}

	@Override
	public double[][] getWeightsOutputLayer() {
		double[][] data =  {{-0.75854576, 0.50632691, 0.15197667, 0.31412286, 0.17962566, -0.43277290, -0.28230524, 0.55581486, -0.77414250, 0.64516592, 0.19056167}};
		return data;
	}

	@Override
	public Statistic[] getParameterStatistic() {
		Statistic[] statistics = new Statistic[4];
		statistics[0] = new Statistic( 6.708695652173912549e+01, 2.345099060386271717e+01);
		statistics[1] = new Statistic( 1.602173913043478251e+03, 4.005372101450439004e+02);
		statistics[2] = new Statistic( 7.622826086956521294e+02, 6.125875771655369135e+02);
		statistics[3] = new Statistic( 8.276250000000000284e+01, 3.892861019322533167e+01);
		return null;
	}

}
