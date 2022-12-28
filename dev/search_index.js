var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SchottkyAnoMaLy","category":"page"},{"location":"#SchottkyAnoMaLy","page":"Home","title":"SchottkyAnoMaLy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SchottkyAnoMaLy.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SchottkyAnoMaLy]","category":"page"},{"location":"#SchottkyAnoMaLy.DonutVolcanoEnsemble","page":"Home","title":"SchottkyAnoMaLy.DonutVolcanoEnsemble","text":"DonutVolcanoEnsemble{T <: Real}\n\nAn ensemble of M donutvolcanos takes the form \n\nmathrmp_M(x) = frac1M sum_k=1^M mathrmdonutvolcano(x mu_k sigma_k)\n\nThis object is a wrapper around an ensemble::Vector{Tuple{T, T}} for the individual donutvolcanos. The values of (μ_k σ_k) are restricted such that mu_k geq 0 and sigma_k  0 via the valid function.\n\n\n\n\n\n","category":"type"},{"location":"#SchottkyAnoMaLy.DonutVolcanoEnsemble-Tuple{Any}","page":"Home","title":"SchottkyAnoMaLy.DonutVolcanoEnsemble","text":"(::DonutVolcanoEnsemble)(x)\n\nEvaluate the DonutVolcanoEnsemble as a function over a set of values x.\n\njulia> dve = DonutVolcanoEnsemble(Float64, [(0, 1)]);\n\njulia> dve(2)\n0.2706705664732254\n\njulia> dve([3, 4])\n2-element Vector{Float64}:\n 0.033326989614726917\n 0.0013418505116100474\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.DonutVolcanoEnsemble-Union{Tuple{Array{Tuple{T, T}, 1}}, Tuple{T}} where T","page":"Home","title":"SchottkyAnoMaLy.DonutVolcanoEnsemble","text":"DonutVolcanoEnsemble(args...)\n\nVarious interfaces to a DonutVolcanoEnsemble\n\nCopy/Move constructors\n\nDonutVolcanoEnsemble(::Vector{Tuple{T, T}})\nCreate an ensemble from a Vector of (μ, σ) Tuples of the same Type.\nDonutVolcanoEnsemble(::Vector{Tuple{T, U}})\nCreate an ensemble from a Vector of (μ, σ) Tuples of the different Types. \nThe type of the ensemble is chosen by Base.promote_type.\nDonutVolcanoEnsemble(::Type{S}, ::Vector{Tuple{T, U}})\nCreate an ensemble from a Vector of (μ, σ) Tuples of the different Types into an ensemble of with preferred type S.\nThe ultimate type of the ensemble is chosen by Base.promote_type.\n\nnote: Note\nThe constructors above will check that any supplied pair is valid.\n\nEmpty constructors\n\nDonutVolcanoEnsemble(::Type{S})\nCreate an empty ensemble of chosen type S.\nDonutVolcanoEnsemble()\nCreate an empty ensemble. By default the type is Float64.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.InterpolationSet","page":"Home","title":"SchottkyAnoMaLy.InterpolationSet","text":"InterpolationSet{T <: Real}\n\nContainer around the relevant arrays used for the interpolations in Kernel Ridge Regression. \n\nContents\n\nIt is assumed that the order of the Chebyshev interpolation is n and the  number of ensembles in the interpolation set is N.\n\ncheby_components::Matrix{T}: an N × (n + 1) matrix of the Chebyshev coefficients for all ensembles in the InterpolationSet.\nmsqdiff_Gram::Matrix{T}: an N × N matrix of the msqdiff values between each of the ensembles in the InterpolationSet.\ninv_Gram::Matrix{T}: an N × N matrix used as a temporary placeholder for the intermediary calculations, for example, the inverse of the regularized Gram matrix. \n\n\n\n\n\n","category":"type"},{"location":"#SchottkyAnoMaLy.NLevelSystem","page":"Home","title":"SchottkyAnoMaLy.NLevelSystem","text":"abstract type NLevelSystem  end\n\nCreate a supertype for all non-interacting systems with discrete  energy levels. \n\nEach new concrete subtype must define a specific_heat function.\n\n\n\n\n\n","category":"type"},{"location":"#SchottkyAnoMaLy.RandomDonutVolcanoGenerator","page":"Home","title":"SchottkyAnoMaLy.RandomDonutVolcanoGenerator","text":"RandomDonutVolcanoGenerator{T <: Real}\n\nObject to generate a random DonutVolcanoEnsemble.\n\n\n\n\n\n","category":"type"},{"location":"#SchottkyAnoMaLy.TrainingSet","page":"Home","title":"SchottkyAnoMaLy.TrainingSet","text":"TrainingSet{T <: Real}\n\nContainer around the relevant arrays used for the training of the  regularized Kernel Ridge Regression model.\n\n\n\n\n\n","category":"type"},{"location":"#SchottkyAnoMaLy.TwoLevelSystem","page":"Home","title":"SchottkyAnoMaLy.TwoLevelSystem","text":"struct TwoLevelSystem end\n\nEmpty struct for the case of the two-level system. Subtype of NLevelSystem. Used to define traits for this specific type of system.\n\n\n\n\n\n","category":"type"},{"location":"#Base.append!-Union{Tuple{T}, Tuple{DonutVolcanoEnsemble{T}, Any}} where T","page":"Home","title":"Base.append!","text":"Base.append!(::DonutVolcanoEnsemble, vals)\n\nAppend the vals::Vector{Tuple{S, T}} to the DonutVolcanoEnsemble.\n\njulia> dve = DonutVolcanoEnsemble()\nDonutVolcanoEnsemble{Float64}(Tuple{Float64, Float64}[])\n\njulia> append!(dve, [(0, 1), (1, 3)])\n2-element Vector{Tuple{Float64, Float64}}:\n (0.0, 1.0)\n (1.0, 3.0)\n\njulia> dve\nDonutVolcanoEnsemble{Float64}([(0.0, 1.0), (1.0, 3.0)])\n\nnote: Note\nThis function will check that the pair is valid.\n\n\n\n\n\n","category":"method"},{"location":"#Base.eltype-Union{Tuple{DonutVolcanoEnsemble{T}}, Tuple{T}} where T","page":"Home","title":"Base.eltype","text":"Base.eltype(::DonutVolcanoEnsemble)\n\nReturn the type of the DonutVolcanoEnsemble.\n\njulia> dve = DonutVolcanoEnsemble()\nDonutVolcanoEnsemble{Float64}(Tuple{Float64, Float64}[])\n\njulia> eltype(dve)\nFloat64\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{DonutVolcanoEnsemble}","page":"Home","title":"Base.length","text":"length(::DonutVolcanoEnsemble)\n\nReturn the number of donutvolcano in the DonutVolcanoEnsemble.\n\n\n\n\n\n","category":"method"},{"location":"#Base.push!-Union{Tuple{T}, Tuple{DonutVolcanoEnsemble{T}, Any}} where T","page":"Home","title":"Base.push!","text":"Base.push!(::DonutVolcanoEnsemble, pair)\n\nPush a new (μ, σ) Tuple into a given DonutVolcanoEnsemble.\n\njulia> dve = DonutVolcanoEnsemble()\nDonutVolcanoEnsemble{Float64}(Tuple{Float64, Float64}[])\n\njulia> push!(dve, (0, 1))\n1-element Vector{Tuple{Float64, Float64}}:\n (0.0, 1.0)\n\njulia> dve\nDonutVolcanoEnsemble{Float64}([(0.0, 1.0)])\n\nnote: Note\nThis function will check that the pair is valid.\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Union{Tuple{T}, Tuple{Random.AbstractRNG, RandomDonutVolcanoGenerator{T}, Int64}} where T","page":"Home","title":"Base.rand","text":"rand([rng = GLOBAL_RNG], ::RandomDonutVolcanoGenerator{T}, num_ensembles::Int)\n\nReturn a Vector of random DonutVolcanoEnsembles of length num_ensembles. The type of each DonutVolcanoEnsemble is T. By default, the GLOBAL_RNG is used.\n\n\n\n\n\n","category":"method"},{"location":"#Base.rand-Union{Tuple{T}, Tuple{Random.AbstractRNG, RandomDonutVolcanoGenerator{T}}} where T","page":"Home","title":"Base.rand","text":"rand([rng = GLOBAL_RNG], ::RandomDonutVolcanoGenerator{T})\n\nGenerate a random DonutVolcanoEnsemble of type T based on the  RandomDonutVolcanoGenerator supplied. By default, T = Float64.\n\njulia> using Random \n\njulia> rng = MersenneTwister(42);  # Choice for longevity. Use Xoshiro in practice or the GLOBAL_RNG.\n\njulia> rdveg = RandomDonutVolcanoGenerator(3, 10, 10);\n\njulia> dve = rand(rng, rdveg);     # Suppress output for floating-point error reasons.\n\njulia> for tup ∈ ensemble(dve)\n           @show round.( tup; digits = 6 )\n       end\nround.(tup; digits = 6) = (6.23099, 2.780566)\nround.(tup; digits = 6) = (9.745867, 4.499406)\nround.(tup; digits = 6) = (8.427712, 3.660781)\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.Theta-Tuple{Any}","page":"Home","title":"SchottkyAnoMaLy.Theta","text":"Theta(x)\n\nPackage-specific implementation of the Heaviside Theta function. Our definition is\n\nTheta(x) = begincases\n1  x geq 0\n\n0  mathrmotherwise\nendcases\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.chebycoefficients","page":"Home","title":"SchottkyAnoMaLy.chebycoefficients","text":"chebycoefficients(ensembles, order, Δmin, Δmax, [coefftol = zero(Float64)])\n\nAllocate the appropriate coefficients Matrix and pass it to chebycoefficients!.\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.chebycoefficients!","page":"Home","title":"SchottkyAnoMaLy.chebycoefficients!","text":"chebycoefficients!(coefficients, ensembles, order, Δmin, Δmax, [coefftol = zero(Float64)])\n\nCompute all of the Chebyshev coefficients for each of the ensembles to a given order on the  interval [Δmin, Δmax]. This function uses chebydecomposition to do so, and assumes the  coefficients argument is a length(ensembles) × (order + 1) Matrix.\n\nBecause this is a somewhat complex calculation, it should probably be calculated once.\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.chebydecomposition","page":"Home","title":"SchottkyAnoMaLy.chebydecomposition","text":"chebydecomposition(ensemble, order, Δmin, Δmax, [ coefftol = zero(Float64) ])\n\nUse FastChebInterp.jl to compute the Chebyshev interpolation of a given ensemble to a polynomial order on the [Δmin, Δmax] interval. This function returns the  coefficients a_k computed by FastChebInterp.chebinterp and defined by \n\nmathrmp(Delta) approx sum_k=0^M a_k T_k(Delta)\n\nwhere mathrmp(Delta) is the ensemble, M is the order, and T_k(Delta) is the k^mathrmth Chebyshev polynomial of the first kind.\n\nnote: Note\nChanging the optional coefftol from the default value of 0.0 may lead to issues downstream. Essentially, FastChebInterp.jl uses this (I think) for precision purposes, but if it is nonzero then the output order is not guaranteed to be what is provided as and argument.\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.compute_cVs!-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.compute_cVs!","text":"compute_cVs!( cV_arr, ensembles, temps; [kwargs...] )\n\nCompute the specific_heat at each temperature in temps for  a given ensemble as a single column. By assumption, cV_arr is a  length(temps) × length(ensembles) Matrix, and it has been initialized with zeros.\n\nKeyword arguments\n\nnls =TwoLevelSystem(): The type of NLevelSystem used to compute the specific_heat.\nΔmin = 0.: The minimum value of the level-splitting in the integration over each ensemble.\nΔmax = Inf: The maximum value of the level-splitting in the integration over each ensemble.\nrtol = sqrt(eps()): The relative tolerance used in QuadGK.quadgk to integrate over the ensembles.\n\nnote: Note\nSince this populates the specific heat values with QuadGK.quadgk, it is best only to compute once as it's a bit of an expensive operation.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.compute_cVs-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.compute_cVs","text":"compute_cVs(ensembles, temps; [kwargs...])\n\nCreates a zero Matrix of size length(temps) × length(ensembles) and  passes it to compute_cVs!.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.create_chebinterp","page":"Home","title":"SchottkyAnoMaLy.create_chebinterp","text":"create_chebinterp(coefficients, lowerbound, upperbound, [N = 1])\n\nCreate a new FastChebInterp.ChebPoly from a set of Chebyshev coefficients. By default (and until I can think of a reason to generalize), this will create a 1D ChebPoly. By assumption, the lowerbound and upperbound are numbers.\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.donutvolcano-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.donutvolcano","text":"donutvolcano(x, μ, σ)\n\nThe donutvolcano distribution calculated for an input x with center μ and width σ. The argument x can be a scalar or broadcastable.\n\nThe distribution itself is given by \n\nrm donutvolcano(x μ σ) = fracx Theta(x)mathcalN(musigma) expleft -fracleft(x - muright)^22sigma^2 right\n\nwhere we use our own Heaviside Theta function above. The normalization constant mathcalN(musigma) given by norm_donutvolcano.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.ensemble-Tuple{DonutVolcanoEnsemble}","page":"Home","title":"SchottkyAnoMaLy.ensemble","text":"ensemble(::DonutVolcanoEnsemble)\n\nGetter for the Vector{Tuple{T, T}} of the given ensemble.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.gausskernel-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.gausskernel","text":"gausskernel(d2, hypσ, [method = TrapezoidalFast()])\ngausskernel(xdata, y1data, y2data, hypσ, [method = TrapezoidalFast()])\n\nCompute the Gaussian kernel function for two sets of ydata, given the hyperparameter hypσ.  This kernel function is of the form\n\nKy_1(x) y_2(x) sigma = expleft - fracd^2y_1(x) y_2(x)2sigma^2 right\n\nwhere d^2 is the msqdiff functional.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.get_pair-Tuple{DonutVolcanoEnsemble, Any}","page":"Home","title":"SchottkyAnoMaLy.get_pair","text":"get_pair(::DonutVolcanoEnsemble, pair_idx) -> Tuple{T, T}\n\nGetter for a single pair (Tuple{T, T}) at a specified pair_idx.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.input_reference_msqdiffs!-NTuple{4, Any}","page":"Home","title":"SchottkyAnoMaLy.input_reference_msqdiffs!","text":"input_reference_msqdiffs!(output, test_cV, cV_arr, temps, [method = TrapezoidalFast()])\n\nCompute a single column vector of the msqdiffs between the test_cV argument and each column of the cV_arr, all measured as functions of temps  temperature. Store the result in the output vector.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.input_reference_msqdiffs-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.input_reference_msqdiffs","text":"input_reference_msqdiffs(test_cV, cV_arr, temps, [method = TrapezoidalFast()])\n\nAllocate an appropriate output Vector and pass it to input_reference_msqdiffs!.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.kernel-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.kernel","text":"kernel(msqdiff_matrix, hypσ)\n\nCompute the element-wise gausskernel of the msqdiff_matrix with respect to the hyperparameter hypσ. This makes a copy.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.mass2","page":"Home","title":"SchottkyAnoMaLy.mass2","text":"mass2( xdata, ydata, [method = TrapezoidalFast()] )\n\nUse NumericalIntegration.jl to compute the \"mean-square-mass\" of a set of data ydata over the domain xdata. \n\nnote: Note\nThe default IntegrationMethod is set to TrapezoidalFast which will lead  to errors if xdata and ydata are of different lengths. For experimental data inputs, however, this should be fine because the specific heat is  measured for a specific temperature.\n\nThe mean-square-mass formula, given as a continuous integral, is \n\nm^2y(x) = frac1b - aint_a^b mathrmdx left y(x) right^2\n\njulia> xvals = LinRange(1, 10, 10);\n\njulia> yvals = sqrt.(xvals);  # In this case the trapezoidal rule is exact\n\njulia> value = SchottkyAnoMaLy.mass2(xvals, yvals)\n5.5\n\njulia> value ≈ 1/(10 - 1) * 1/2 * ( maximum(xvals)^2 - minimum(xvals)^2 )\ntrue\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.minimizing_component-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.minimizing_component","text":"minimizing_component(kernel_column, inv_kernel_matrix, train_component_vector)\n\nCompute the solution to the kernel ridge regression problem (KRR). This solution  minimizes the regularized square-error\n\nmathcalE_m = sum_i left( f^m_i  - sum_j K(i j sigma) alpha^m_j right)^2 + lambda sum_ij alpha_i K(i J) alpha_j\n\nwhere K(i j) is the kernel function measured between functions i and j, f^m_i is the m^mathrmth component of i^mathrmth training function, sigma and lambda are the hyperparameters, and boldsymbolalpha^m is related to the boldsymbolf^m training vector as \n\nboldsymbolalpha^m = left( K(ijsigma) + lambda mathbb1 right)^-1 boldsymbolf^m\n\nThe prediction that minimizes mathcalE_m is given by \n\nf^m_mathrmout = boldsymbolK^T_in boldsymbolalpha^m\n\nBy direct substitution, this function then computes\n\nf^m_mathrmout = boldsymbolK^T_in left( K(ijsigma) + lambda mathbb1 right)^-1 boldsymbolf^m\n\nwhere boldsymbolK^T_in = kernel_column, the whole inverse is inv_kernel_matrix, and boldsymbolf^m = train_component_vector.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.minimizing_solution-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.minimizing_solution","text":"minimizing_solution(kernel_column, inv_kernel_matrix, train_component_matrix)\n\nUse minimizing_component to compute the full solution to the Kernel Ridge Regression problem. This assumes that train_component_matrix is of size N × M, where N is the number of elements in  the training set and M is the number of Chebyshev coefficients (order + 1).\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.msqdiff","page":"Home","title":"SchottkyAnoMaLy.msqdiff","text":"msqdiff(xdata, y1data, y2data, [method = TrapezoidalFast()])\n\nCompute the mean-square-difference between two sets of ydata on the given xdata domain. This function calls mass2 to perform the integration. \n\nThe formula for the mean-square-difference between functions y_1 and y_2 on the  continuous interval (a,b) is given by \n\nd^2(y_1 y_2) = m^2y_1(x) - y_2(x) = frac1b - aint_a^b mathrmdx left y_1(x) - y_2(x) right^2\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.norm_donutvolcano-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.norm_donutvolcano","text":"norm_donutvolcano(μ, σ)\n\nThe normalization for a donutvolcano distribution with center μ and width σ. The explicit form is given by\n\nmathcalN(mu sigma) = sqrtfracpi 2 mu  sigma \n   lefttexterfleft(fracmu sqrt2 sigma\nright)+1right+sigma ^2 rm e^-fracmu ^22 sigma ^2\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.populate_msqdiffs!-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.populate_msqdiffs!","text":"populate_msqdiffs!( msqdiff_mat, cV_arr, temps; [kwargs...])\n\nCompute the msqdiff for each pair of specific heats in cV_arr as  a function of temperature (temps) as the xdata. This assumes that \n\nmsqdiff_mat is a N × N zero Matrix,\nN == size(cV_arr)[2], where cV_arr is a specific heat Matrix calculated from compute_cVs!,\nthe number of temperatures in temps equals the number of specific heat rows.\n\nThis function uses input_reference_msqdiffs! to fill the Matrix. The input is the  specific heat of a given ensemble, and the tests are those from all other ensembles.\n\nnote: Note\nN is likely to be a large number, so it is best to use this function once.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.populate_msqdiffs-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.populate_msqdiffs","text":"populate_msqdiffs(cV_arr, temps; [kwargs...])\n\nCreates a zero Matrix of size length(ensembles) × length(ensembles) and  passes it to populate_msqdiffs!.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.single_component_loss_gradient-NTuple{7, Any}","page":"Home","title":"SchottkyAnoMaLy.single_component_loss_gradient","text":"single_component_loss_gradient(prediction, value, νT_Minv, Qmat, Minv, fcomp_vector, ∂σd2_ν_vector)\n\nCompute the loss gradient for a single component (taken analytically of single_component_loss). \n\nThis is a hefty function, so it is best to pass in as many of its parts as possible to avoid multiple computations of the same quantity.\n\nThe mathematics for this gradient, as a function of the hyperparameters sigma and lambda follows as \n\nnabla ell_m = (f^m - tildef^m) beginpmatrix partial_sigma tildef^m  partial_lambda tildef^m endpmatrix \n\nwith \n\ntildef^m = boldsymbolnu^mathrmT(sigma) left K(sigma) + lambda mathbb1 ^-1 boldsymbolf^m\n\nboldsymbolnu is the N_mathrminterp times 1 Vector comprised of the gausskernel calculated between the input function and the N_mathrminterp functions in the interpolation set. We define the Matrix M(sigma lambda) equiv K(sigma) + lambda mathbb1, such that the predicted component tildef^m simplifies to \n\ntildef^m = boldsymbolnu^mathrmT(sigma) M^-1(sigma lambda) boldsymbolf^m\n\nThe quantity boldsymbolf^m is the N_mathrminterp times 1 Vector of the m^mathrmth Chebyshev component of each ensemble in  the interpolation set.\n\nRecalling that \n\npartial (M^-1) = - M^-1 (partial M) M^-1\n\nit follows \n\npartial_lambda tildef^m = - boldsymbolnu^mathrmT M^-1 M^-1 boldsymbolf^m\n\nand \n\npartial_sigma tildef^m = -left sigma^-3(d^2boldsymbolnu)^mathrmT + boldsymbolnu^mathrmTM^-1 Q(sigma lambda) right M^-1boldsymbolf^m\n\nThe Vector sigma^-3(d^2 boldsymbolnu) is the element-wise derivative of boldsymbolnu and the matrix Q(sigma lambda) is that for K(sigma lambda).\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.specific_heat","page":"Home","title":"SchottkyAnoMaLy.specific_heat","text":"specific_heat([::NLevelSystem = TwoLevelSystem()], T, ::DonutVolcanoEnsemble, [Δmin = 0, Δmax = Inf])\n\nCalculate the specific_heat tildec_V(T Delta integrated over the DonutVolcanoEnsemble for a fixed temperature T. By default, this is calculated for a TwoLevelSystem.\n\nThe formula for this integration is given by \n\nc_V(T) = int_Delta_min^Delta_max mathrmdDelta mathrmp(Delta) tildec_V(T Delta)\n\nwhere mathrmp(Delta) is calculated from the DonutVolcanoEnsemble.\n\n\n\n\n\n","category":"function"},{"location":"#SchottkyAnoMaLy.specific_heat-Tuple{Any, Any}","page":"Home","title":"SchottkyAnoMaLy.specific_heat","text":"specific_heat(T, Δ) = specific_heat(TwoLevelSystem, T, Δ)\n\nThe default specific heat implementation chooses a TwoLevelSystem.\n\njulia> specific_heat(1, 1)\n0.41997434161402614\n\njulia> specific_heat(TwoLevelSystem(), 1, 1)\n0.41997434161402614\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.specific_heat-Tuple{TwoLevelSystem, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.specific_heat","text":"specific_heat(::TwoLevelSystem, T, Δ)\n\nDefine the specific heat function for a two-level system at temperature T and level-splitting Δ (measured in units of temperature). The formula is given by \n\nc_V(T Delta) = left( fracDeltaT right)^2 mathrmsech^2 left( fracDeltaT right)^2\n\njulia> specific_heat(TwoLevelSystem(), 1, 1)\n0.41997434161402614\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.valid-Tuple{Any}","page":"Home","title":"SchottkyAnoMaLy.valid","text":"valid(::Tuple{T, T})\n\nReturns the given Tuple (μ, σ) if μ ≥ 0 and σ > 0. Otherwise, an AssertionError  will be thrown.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.μvalue-Union{Tuple{Tuple{T, T}}, Tuple{T}} where T","page":"Home","title":"SchottkyAnoMaLy.μvalue","text":"μvalue(::Tuple{T, T})\nμvalue(::DonutVolcanoEnsemble, idx)\n\nReturn the value of μ from a given (μ, σ) Tuple.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.σvalue-Union{Tuple{Tuple{T, T}}, Tuple{T}} where T","page":"Home","title":"SchottkyAnoMaLy.σvalue","text":"σvalue(::Tuple{T, T})\nσvalue(::DonutVolcanoEnsemble, idx)\n\nReturn the value of σ from a given (μ, σ) Tuple.\n\n\n\n\n\n","category":"method"},{"location":"#SchottkyAnoMaLy.∂σ_gausskernel-Tuple{Any, Any, Any}","page":"Home","title":"SchottkyAnoMaLy.∂σ_gausskernel","text":"∂σ_gausskernel(d2, hypσ)  # \\partial<TAB>\\sigma<TAB>\n∂σ_gausskernel(d2, gK, hypσ)\n\nCalculate the gradient of gausskernel with respect to the hyperparameter hypσ. The explicit formula is given by \n\npartial_sigma K(d^2 sigma) = sigma^-3 d^2 K(d^2 sigma)\n\nwhere the K(d^2 sigma) function is gausskernel and gK in the second  method for this function.\n\n\n\n\n\n","category":"method"}]
}