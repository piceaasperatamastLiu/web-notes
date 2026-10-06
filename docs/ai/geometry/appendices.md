# 附录：补充证明、反例与参考文献

## A. 补充证明

### A.1 Tychonoff 定理 ★

采用选择公理。第 1 章已经证明超滤子紧性判据与超滤子延拓引理。设 $X=\prod_iX_i$，每个 $X_i$ 紧；若积空则结论显然。给 $X$ 上超滤子 $\mathcal U$，投影推前

$$
(\pi_i)_*\mathcal U
=\{A\subset X_i:\pi_i^{-1}(A)\in\mathcal U\}
$$

是超滤子：原像保持补与有限交，而 $\mathcal U$ 对每个集合或其补作出恰好一个选择。紧性给其极限 $x_i$，选择这些点得到 $x=(x_i)$。

基本邻域只限制有限坐标，形为 $\bigcap_{j=1}^r\pi_{i_j}^{-1}(U_{i_j})$。每个原像属于 $\mathcal U$，有限交也属于它，因此 $\mathcal U\to x$。由判据，积紧。各因子无需 Hausdorff；若它们 Hausdorff，积也 Hausdorff且超滤子极限唯一。

### A.2 正则 Lindelöf 空间正规

设 $A,B$ 为不交闭集。正则性使每个 $a\in A$ 有开邻域，其闭包避开 $B$；加上 $X\setminus A$ 后形成 $X$ 的开覆盖。Lindelöf 性给可数个 $U_n$ 覆盖 $A$，且 $\overline U_n\cap B=\varnothing$。同样取 $V_n$ 覆盖 $B$，闭包避开 $A$。

令

$$
U=\bigcup_n\left(U_n\setminus\bigcup_{j\le n}\overline V_j\right),
\qquad
V=\bigcup_n\left(V_n\setminus\bigcup_{j\le n}\overline U_j\right).
$$

各差仍开，因为只删有限个闭集。$A\subset U$、$B\subset V$。若某点同时属于来自 $U_n$ 与 $V_m$ 的项，$m\le n$ 时第一项已删去 $\overline V_m$；$n\le m$ 时第二项已删去 $\overline U_n$，两种情况都矛盾。故 $U\cap V=\varnothing$，完成证明。

### A.3 有限图的一阶同调

给边定向，边界矩阵每列在起点为 $-1$、终点为 $1$。每个连通分支的生成树有“顶点数减一”条边；逐次删除叶子证明这些列线性独立，并生成该分支所有坐标和为零的整数向量。

因此 $\partial_1$ 的秩为 $v-c$，核为秩 $e-v+c$ 的自由群。没有 $2$ 链，
$H_1\cong\mathbb Z^{e-v+c}$，$H_0\cong\mathbb Z^c$。对连通图，这与基本群自由秩 $e-v+1$ 的 Abel 化一致。

<a id="nullstellensatz"></a>

### A.4 Hilbert 零点定理 ★

先证明本章所需的 Zariski 引理：若代数闭域 $k$ 上的域 $L$ 作为 $k$ 代数有限生成，则 $L=k$。

从有限生成元中选极大的代数无关组 $x_1,\ldots,x_r$，其余记为 $y_1,\ldots,y_s$。后者在 $k(x_1,\ldots,x_r)$ 上代数。把有限多个首一代数方程的系数分母全部乘入一个非零多项式 $f$，则各 $y_j$ 在
$A=k[x_1,\ldots,x_r,1/f]$ 上整。由于 $L$ 是域，$1/f\in L$，所以 $L=A[y_1,\ldots,y_s]$，是 $A$ 的有限整扩张。

若一个整扩张环是域，其底环也是域：对非零 $a\in A$，$a^{-1}$ 在 $L$ 中整，把其首一方程乘以 $a^{m-1}$ 就表示 $a^{-1}$ 为 $A$ 的元素。

若 $r>0$，代数闭域是无限域，可选 $c\in k$ 使 $x_1-c$ 不整除 $f$，因为非零多项式只能有有限多个这样的线性因子。但 $x_1-c$ 在 $A$ 中不可逆：若逆存在，清分母后它会整除某个 $f^N$，与其为素元且不整除 $f$ 矛盾。因此 $A$ 不是域，得到矛盾。故 $r=0$，$L/k$ 有限代数；代数闭性给 $L=k$。

现在令 $\mathfrak m$ 为 $k[x_1,\ldots,x_n]$ 的极大理想。商域有限生成，引理使其为 $k$；各 $x_i$ 的像为 $a_i$，所以
$\mathfrak m=(x_1-a_1,\ldots,x_n-a_n)$。这是弱零点定理，也说明每个真理想都有公共零点。

证明强形式。若 $h$ 在 $V(I)$ 上为零且 $h\ne0$，在添变量的环中取
$J=(I,1-th)$。若 $J$ 真，弱定理给公共零点 $(a,b)$，则 $a\in V(I)$，但 $1-bh(a)=1$，矛盾。故 $1\in J$。

在局部化 $k[x_1,\ldots,x_n,1/h]$ 中代入 $t=1/h$，得到 $1$ 是 $I$ 中有限个元素的局部化线性组合。清分母后 $h^N\in I$，故 $h\in\sqrt I$。$h=0$ 时显然成立。反过来，$h^N\in I$ 使每个公共零点上 $h^N=0$，域中没有非零幂零元，故 $h=0$。于是 $I(V(I))=\sqrt I$，证毕。

## B. 公式与符号表

本表与[共同符号约定](../notation.md)同时使用；后者管全站的归一化，本表管几何对象的具体类型。

| 记号 | 含义与约定 |
| --- | --- |
| $\mathcal T$ | 拓扑；乘积测度章节的第二可测集合族须依语境辨认 |
| $\pi_n(X,x_0)$ | 带基点同伦群；路径乘法先右后左 |
| $H_n(X;A),H^n(X;A)$ | 奇异同调、上同调；缺省 $A=\mathbb Z$ |
| $H^k_{\mathrm{dR}},H^{p,q}_{\bar\partial},H^q(X,\mathcal F)$ | de Rham、Dolbeault、层上同调 |
| $\partial,\delta,d$ | 链边界、余链微分、形式外微分 |
| $\mathbb T^n$ | $\mathbb R^n/\mathbb Z^n$，周期一 |
| $\mathbb P(V)$ | 一维子空间；经典代数几何底域为 $k$ |
| $g,\gamma,\operatorname{vol}_g$ | Riemann 度量、曲面属、体积测度 |
| $\omega,\Omega$ | 辛形式或连接矩阵（按章说明）、曲率矩阵；$\Omega^k(M)$ 另为形式空间 |
| $\nabla,R,T$ | 连接、曲率、挠率 |
| $*_g,d^\dagger$ | Hodge 星、外微分的内积伴随 |
| $\Delta_g,\Delta_{\mathrm H}$ | 函数 Laplace 算子、非负 Hodge 算子，$\Delta_{\mathrm H}=-\Delta_g$ 在函数上成立 |
| $X_H,\{f,h\}$ | $\iota_{X_H}\omega=dH$，$\dot f=\{f,H\}$ |
| $c_j,p_j,e,w_j$ | Chern、Pontryagin、Euler、Stiefel–Whitney 类 |

同一个 $\omega$ 在第 8 章是矩阵值连接一阶形式，在第 10 章是标量二阶辛形式，类型始终明示；两者不是同一个对象换了名称。类似地，$\partial M$ 表示几何边界而 $\partial_n$ 是链同态。跨章引用时应带上对象，而非仅复制字母。

## C. 经典反例

### C.1 连通不推出道路连通

拓扑学家正弦曲线为
$X=\{(x,\sin(1/x)):0<x\le1\}\cup(\{0\}\times[-1,1])$。
前一集合是区间的连续像，连通；其闭包就是 $X$，故 $X$ 连通。

若道路从竖直段进入振荡图像，取进入某个 $x>0$ 图像分支前的最后零横坐标时刻 $t_0$。之后横坐标在一段时间内为正，并由连续性经过任意充分小的正值。选趋零的横坐标使 $\sin(1/x)$ 交替等于 $1,-1$；相应道路时刻可选趋于 $t_0$，与纵坐标在 $t_0$ 连续矛盾。因此不存在这样的道路。

### C.2 局部同胚不一定是覆盖

包含映射 $(0,2)\to\mathbb R/\mathbb Z$，$t\mapsto[t]$ 是满射局部同胚。在 $[0]$ 附近，接近 $0$ 或 $2$ 的不完整分片使原像无法由同胚到整个邻域的分片组成，所以不是覆盖。纤维在 $[0]$ 为一个点，在其他点为两个，已违反连通底空间覆盖的常数纤维基数。

### C.3 闭形式不必恰当

第 6 章穿孔平面的角形式闭，但沿单位圆积分为 $1$。若它是 $df$，闭路积分应为零。因此局部 Poincaré 引理不能替代全局同调计算。

### C.4 平坦不等于平凡

圆周上的 Möbius 实线丛可取平坦连接，绕一圈 holonomy 为 $-1$。曲率为零，丛仍非平凡；其障碍由模 $2$ 的 $w_1$ 记录。

### C.5 同伦型不决定光滑结构

同伦等价保留同伦群与同调，却不保留局部维数、度量或光滑结构。甚至同胚的流形也可能有不等价光滑结构；四维现象是第 15 章规范理论的重要动机。不能从拓扑不变量相同直接推出微分同胚。

## D. 核心定理索引

| 定理 | 位置 | 本讲义的证明范围 |
| --- | --- | --- |
| Urysohn、Tietze | 第 1 章 1.7 | 完整构造 |
| 度量紧性等价 | 1.8 | 完整主步骤 |
| 可数基度量化 | 1.10；A.2 | 构造度量与正规性 |
| Tychonoff | A.1 | 超滤子证明 |
| 路径、同伦提升 | 第 2 章 2.4 | 完整局部拼接 |
| van Kampen | 2.6 | 分割与网格关系证明 |
| 同伦不变性、长正合列 | 第 3 章 3.4–3.5 | 链级构造 |
| 切除 | 3.6 | 剖分证明；标准锥算子的细项未全展开 |
| Poincaré 对偶 | 3.10 | 组合剖分情形的对偶胞腔路线 |
| Hurewicz、Whitehead | 第 4 章 4.5 | 陈述与证明路线，完整证明引用 |
| Desargues、Pappus、Pascal、交比不变性 | 第 5 章 | 非退化配置的坐标证明 |
| Poincaré 引理、Stokes | 第 6 章 | 完整局部证明与拼接 |
| de Rham | 6.8 | 局部到整体路线，比较定理引用 |
| Levi–Civita、Gauss 引理 | 第 9 章 | 公式构造与变分证明 |
| Hopf–Rinow、Hodge | 9.6、9.8 | 结构定理引用及后果证明 |
| Darboux、辛约化 | 第 10 章 | Moser 方法与切空间证明 |
| Hilbert 零点定理 | 第 12 章；A.4 | Zariski 引理与 Rabinowitsch 证明 |
| Riemann–Roch | 第 11 章 | 一般定理引用；射影直线完整验证 |
| Carathéodory、Radon、Helly | 第 13 章 | 完整有限维证明 |
| Chern–Weil 不依赖连接 | 第 14 章 | 传递形式证明 |
| Gauss–Bonnet、指标定理 | 第 14 章 | 曲面拼接证明；一般指标定理引用 |
| 曲面分类、几何化 | 第 15 章 | 前者给证明路线，后者引用 |
| 有限持久模分解 | 第 16 章 | 基分解方法与秩恢复 |

## E. 阅读原著时的符号换算

有些书定义 $\iota_{X_H}\omega=-dH$，有些书取 $\omega=dp\wedge dq$；要同时检查两项，不能只看到一个负号就修改 Hamilton 方程。曲率也可能取本讲义 $R$ 的相反数，截面曲率公式因而随之改变。

复线丛的作者可能以坐标而非标架定义过渡函数，此时函数会取逆，绕数也变号。最可靠的检验是计算 $\mathcal O(-1)$ 在 $\mathbb{CP}^1$ 上的 Chern 数应为 $-1$。

## F. 参考文献与进一步阅读

下面的链接指向作者或项目的原始页面。正文的独立证明使用本讲义约定；引用的深定理按相应章节查阅，不假定原著所有符号与本讲义相同。

* James R. Munkres，*Topology*：点集拓扑、基本群与曲面分类的标准教材。
* Allen Hatcher，[Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)：第 1–4 章对应基本群、同调、上同调与同伦论，尤其补全第 3、4 章的比较定理和障碍理论。
* Allen Hatcher，[Vector Bundles & K-Theory](https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html)：向量丛、通用丛与特征类；网页也注明书稿的完成范围。
* John M. Lee，*Introduction to Smooth Manifolds* 与 *Introduction to Riemannian Manifolds*：光滑结构、横截、连接、测地线与比较定理。
* Ana Cannas da Silva，[Lectures on Symplectic Geometry](https://www.math.tecnico.ulisboa.pt/~acannas/Books/lsg.pdf)：Darboux、Hamilton 作用与约化。读时先对照本附录的符号换算。
* Rick Miranda，*Algebraic Curves and Riemann Surfaces*：曲面上的除子、对偶与 Riemann–Roch。
* Ravi Vakil，[The Rising Sea: Foundations of Algebraic Geometry 作者页面](https://math.stanford.edu/~vakil/)：从层与概形进入代数几何的系统学习路线。
* [Stacks Project](https://stacks.math.columbia.edu/)：概形、局部化与层的精确定义；可从 [仿射概形的态射](https://stacks.math.columbia.edu/tag/01I1) 进入。
* Peter M. Gruber，*Convex and Discrete Geometry*：凸体、离散配置与积分几何。
* John Milnor，*Morse Theory*；John Milnor 与 James Stasheff，*Characteristic Classes*：柄、特征类与拓扑障碍。
* Dale Rolfsen，*Knots and Links*；Benson Farb 与 Dan Margalit，*A Primer on Mapping Class Groups*：低维拓扑的两条后续路线。
* Herbert Edelsbrunner 与 John Harer，*Computational Topology: An Introduction*：复形算法与持久同调。
