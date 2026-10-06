# 附录

## A. 实分析补充证明

### A.1 确界原理到单调收敛

设 $x_n$ 递增且上有界，令 $s=\sup_nx_n$。给定 $\varepsilon>0$，有 $N$ 使 $x_N>s-\varepsilon$，否则 $s-\varepsilon$ 也是上界。所有 $n\geq N$ 满足 $s-\varepsilon<x_N\leq x_n\leq s$，故 $x_n\to s$。递减列取负号。这一证明应掌握；它展示确界定义如何转成极限估计。

### A.2 Bolzano–Weierstrass 与 Cauchy 完备性

有界实数列落在闭区间内，二分区间，保留含无穷多项的一半，重复得闭区间套 $I_k$，长度趋零。用确界原理得到唯一公共点，并按递增指标从每个区间选项，形成趋于该点的子列。

Cauchy 列有界，因而有收敛子列 $x_{n_k}\to x$。给定误差，将任意晚期项与一个更晚的子列项比较，三角不等式给整列趋于 $x$。子列收敛加 Cauchy 才足以恢复整列，子列本身不够。

### A.3 Baire 闭球构造

在完备度量空间中，给稠密开集 $U_n$ 和非空开集 $V$。依次选非空闭球 $\overline B_n$，半径小于 $2^{-n}$，使 $\overline B_1\subset V\cap U_1$、$\overline B_{n+1}\subset B_n\cap U_{n+1}$。开性允许选闭球，稠密性保证每步可选点。球心为 Cauchy 列，极限在全部闭球内，故在 $V\cap\bigcap U_n$。这说明交稠密。

### A.4 三个积分收敛工具的关系

单调收敛处理非负、递增；Fatou 用尾部下确界转为递增；控制收敛对 $2g-|f_n-f|$ 用 Fatou。三者都不要求有限总测度。有限测度只是让常数控制函数可积，因此“有界收敛定理”是控制收敛在有限测度下的特例。

学习时先判断结构：有递增性用单调，有统一可积控制用控制，只求下界且非负用 Fatou。若三者均不满足，不应硬套，先寻找截断、局部化或一致可积性。

### A.5 Lebesgue 微分定理的证明结构

在固定有界区域把 $f\in L^1_{\rm loc}$ 近似为连续 $g$。记局部平均振荡的上极限为 $\mathcal O f(x)$，有 $\mathcal O f(x)\leq M(f-g)(x)+|f(x)-g(x)|$，连续 $g$ 的振荡为零。极大弱型与 Markov 控制 $\{\mathcal O f>\varepsilon\}$ 的测度至多 $C\|f-g\|_1/\varepsilon$，令近似误差趋零，得几乎处处 $\mathcal O f=0$。局部化排除边界，再用可数覆盖扩到全空间。

完整论证见 7.16。它调用 7.15 的覆盖估计，但这些估计只使用测度、积分、正则性与覆盖几何，不调用微积分基本定理的一般版本，故无循环。可把 3.20 的一般版本先作为定理使用，读到第 7 章再补齐这一依赖。

### A.6 Radon–Nikodym 的使用边界

“对 $\mu$ 绝对连续”对测度指 $\mu(A)=0\Rightarrow\nu(A)=0$，对区间函数则是 3.20 的小区间总增量条件，两者通过 Stieltjes 测度联系。若需要密度表示，应先确认测度与 $\sigma$-有限假设，再使用 Radon–Nikodym。不是每个测度都相对于 Lebesgue 测度有密度，例如 $\delta_0$。

### A.7 π–λ 引理与测度唯一性

在矩形、区间上知道两个测度相同，还需要说明为什么能推广到它们生成的全部可测集。直接要求这些集合对每种集合运算封闭往往很费力，π–λ 引理把工作分成两个较容易的部分。

称集合族 $\mathcal P$ 为 π 系统，若它对有限两两交封闭。称集合族 $\mathcal D$ 为 λ 系统，若它包含全集 $X$，对补集和可数不交并封闭。λ 系统还对嵌套差封闭：若 $A\subset B$ 且二者在其中，则 $B\setminus A=(A\cup B^c)^c$ 也在其中。

> **π–λ 引理。** 包含 π 系统 $\mathcal P$ 的任何 λ 系统都包含 $\sigma(\mathcal P)$。

为证明它，取包含 $\mathcal P$ 的最小 λ 系统 $\mathcal D$，即所有这类系统的交。我们只需证明 $\mathcal D$ 也对有限交封闭。

固定 $A\in\mathcal P$，令 $\mathcal D_A=\{B\in\mathcal D:A\cap B\in\mathcal D\}$。它包含 $X$；若 $B$ 在其中，则 $A\cap B^c=A\setminus(A\cap B)$ 在 $\mathcal D$；对不交并的封闭性也直接继承。因此 $\mathcal D_A$ 是 λ 系统。因为 $\mathcal P$ 对交封闭，它包含 $\mathcal P$，所以由最小性包含整个 $\mathcal D$。这证明了 $A\in\mathcal P$、$B\in\mathcal D$ 时 $A\cap B\in\mathcal D$。

再固定任意 $B\in\mathcal D$，把上面的角色交换，令 $\mathcal D_B=\{A\in\mathcal D:A\cap B\in\mathcal D\}$。同样的验证说明它是 λ 系统，刚得到的结论说明它包含 $\mathcal P$，故它也等于 $\mathcal D$。有限交的封闭性得证。补集和有限交给有限并；任意可数并可写成逐次删去前面各项后的不交并。因此 $\mathcal D$ 是 σ 代数，必包含 $\sigma(\mathcal P)$。

现在设有限测度 $\mu,\nu$ 在 $\mathcal P$ 上相同，且 $\mu(X)=\nu(X)$。集合族 $\{A:\mu(A)=\nu(A)\}$ 是 λ 系统：补集使用总质量相等，不交并使用可数可加性。引理立刻给出在 $\sigma(\mathcal P)$ 上相等。对于扩张定理的 σ-有限情形，用生成代数中的有限测度集合覆盖 $X$，先将覆盖不交化为 $E_j$。对 $\mu(A\cap E_j)$、$\nu(A\cap E_j)$ 应用有限情形，再对 $j$ 求和，就得到全空间上的唯一性。

### A.8 乘积紧性：Banach–Alaoglu 的拓扑工具

> 任意族非空紧空间的乘积，在乘积拓扑下仍紧。

这一结果通常称 Tychonoff 定理。有限乘积可以用开覆盖直接证明，任意乘积则需要选择原理。下面用超滤子给出证明；本节可在读到 5.13 时再学习。

先把“趋近某个点”写成集合语言。$X$ 上的滤子 $\mathcal U$ 是一族子集，包含 $X$ 而不包含空集，对有限交封闭，并且包含其成员的所有超集。按包含关系极大的滤子称超滤子。任何具有有限交性质的集合族都生成滤子，Zorn 引理把它扩张为超滤子：链的并仍是滤子，故有极大元。

超滤子对每个子集 $A$ 都作出选择：$A$ 或 $A^c$ 必有一个在其中。若 $A$ 不在其中，加入 $A$ 不能生成更大的真滤子，因此有 $U\in\mathcal U$ 满足 $U\cap A=\varnothing$；于是 $U\subset A^c$，给 $A^c\in\mathcal U$。二者不可能同时属于它，因为交为空。

说 $\mathcal U$ 收敛到 $x$，指 $x$ 的每个邻域都属于 $\mathcal U$。紧空间上的每个超滤子都收敛：闭集族 $\{\overline U:U\in\mathcal U\}$ 有有限交性质，紧性给公共点 $x$。若 $x$ 的某个开邻域 $V$ 不属于 $\mathcal U$，则闭集 $V^c$ 属于它，因而 $x\in V^c$，矛盾。

反过来，若每个超滤子都收敛，空间必紧。否则一个没有有限子覆盖的开覆盖 $\{V_i\}$，其补集有有限交性质。将这些补集扩张为超滤子，并设它收敛到 $x$。覆盖中某个 $V_i$ 包含 $x$，收敛要求 $V_i$ 属于超滤子，但 $V_i^c$ 已在其中，矛盾。这证明了紧性与超滤子收敛的等价。

最后取乘积 $X=\prod_iX_i$ 上的超滤子 $\mathcal U$。坐标投影 $\pi_i$ 给出 $X_i$ 上的超滤子 $\mathcal U_i=\{A\subset X_i:\pi_i^{-1}(A)\in\mathcal U\}$。各 $X_i$ 紧，故可选取 $\mathcal U_i$ 的极限 $x_i$。令 $x=(x_i)$。乘积拓扑的基本邻域只限制有限个坐标；这些坐标邻域的原像均在 $\mathcal U$，其有限交也在其中。因此 $\mathcal U$ 收敛到 $x$，乘积空间紧。

在 Banach–Alaoglu 的证明中，每个因子都是复平面中的闭圆盘或实直线中的闭区间。乘积紧性只提供候选泛函的逐点极限；还需验证线性关系构成闭条件，才能确认极限仍是连续线性泛函。5.13 会完成这一步。

## B. 常用不等式汇编

| 名称 | 条件与结论 | 典型用途 |
| --- | --- | --- |
| Cauchy–Schwarz | $\lvert\langle x,y\rangle\rvert\leq\lVert x\rVert\lVert y\rVert$ | 正交与能量 |
| Young（数值） | $a,b\geq0$，共轭 $p,q>1$，$ab\leq a^p/p+b^q/q$ | Hölder 的证明 |
| Hölder | $1/p+1/q=1$，$\int\lvert fg\rvert\leq\lVert f\rVert_p\lVert g\rVert_q$ | 乘积可积性 |
| Minkowski | $p\geq1$，$\lVert f+g\rVert_p\leq\lVert f\rVert_p+\lVert g\rVert_p$ | 函数范数 |
| Jensen | 概率测度、凸 $\phi$，各项有意义时 $\phi(\mathbb EX)\leq\mathbb E\phi(X)$ | 条件期望、凸性 |
| Markov | $X\geq0$、$a>0$，$\mathbb P(X\geq a)\leq\mathbb EX/a$ | 尾概率 |
| Chebyshev | 有限方差，$\mathbb P(\lvert X-m\rvert\geq a)\leq\operatorname{Var}X/a^2$ | 大数律 |
| Gronwall | $u\leq A+\int bu$、$b\geq0$，则 $u\leq Ae^{\int b}$ | 唯一性、稳定性 |
| Poincaré | 有界适当区域上 $u\in H_0^1$，$\lVert u\rVert_2\leq C\lVert\nabla u\rVert_2$ | 强制性 |
| Bessel | 正交归一族，$\sum\lvert\langle x,e_j\rangle\rvert^2\leq\lVert x\rVert^2$ | 频率能量 |

**带参数的二次 Young。** $ab\leq\varepsilon a^2/2+b^2/(2\varepsilon)$，$\varepsilon>0$。能量估计中选小 $\varepsilon$，将第一项吸收到左边。常数依赖要随计算保留。

## C. 经典反例集

| 容易误用的说法 | 反例与缺失条件 |
| --- | --- |
| 有界数列必收敛 | $(-1)^n$；只保证有收敛子列 |
| 闭有界集合必紧 | $\ell^2$ 闭单位球；需有限维或额外全有界性 |
| 连通必道路连通 | 拓扑学家正弦曲线；局部道路连通可排除此例 |
| 各方向导数存在就可微 | 2.2 的 $x^3/(x^2+y^2)$ |
| 逐点极限保连续 | $x^n$ 在 $[0,1]$；一致收敛可保连续 |
| 一致收敛允许交换导数 | $\sin(nx)/n$；需导数收敛与初值控制 |
| 几乎处处收敛允许交换积分 | $n\mathbf1_{(0,1/n)}$；缺少可积控制 |
| 连续且导数几乎处处为零就恒定 | Cantor 函数；绝对连续可恢复基本定理 |
| 导函数必连续 | $f(x)=x^2\sin(1/x)$、$f(0)=0$ 的导数在 0 不连续 |
| 闭形式必恰当 | 穿孔平面的角形式；缺少全球拓扑条件 |
| 有界算子的谱都是特征值 | $L^2([0,1])$ 上乘以 $x$ |
| 弱收敛等于范数收敛 | $\ell^2$ 的 $e_n\rightharpoonup0$ |
| 不相关就是独立 | 对称 $X$ 与 $X^2$ |
| 有限停时可无条件保持期望 | 随机游走首次到 1；缺少一致可积等条件 |

**尖峰的三种判定。** 对 $f_n=n\mathbf1_{(0,1/n)}$：几乎处处趋零；依测度趋零；$\|f_n\|_1=1$ 不趋零。这一序列展示收敛概念之间不能互换。对 $\mathbf1_{[n,n+1]}$，几乎处处趋零，但全空间不依测度趋零，展示有限测度条件的作用。

## D. 符号表

跨讲义的约定见[共同符号约定](../notation.md)。本表只补充所在讲义的专门记号。

| 符号 | 含义 |
| --- | --- |
| $C^k,C_c^\infty$ | $k$ 阶连续可微；光滑紧支撑 |
| $DF,dF$ | Euclidean 全微分；流形映射微分 |
| $df$ | 函数的 1-形式微分 |
| $T_pM,T_p^*M$ | 切空间、余切空间 |
| $\Omega^k(M),d,\wedge,F^*$ | $k$-形式、外微分、外积、拉回 |
| $\partial M$ | 流形边界，带外法向优先诱导定向 |
| $\Sigma,\mathcal B,\mu$ | 可测集合族、Borel 集族、测度 |
| $m_n,\mathcal L_n,m_n^*$ | $n$ 维 Lebesgue 测度、Lebesgue 可测集合族、外测度 |
| $\nu_F,\mu\otimes\nu,\mu_X$ | Stieltjes 测度、乘积测度、随机变量的分布 |
| $m_{\mathbb T},\operatorname{vol}_g$ | 圆群归一化 Haar 测度、Riemann 体积测度 |
| $L^p,W^{k,p},H^k$ | 积分范数空间、Sobolev、$W^{k,2}$ |
| $X^*,X^{**}$ | 连续线性对偶、双对偶 |
| $T^*,T^\dagger$ | 对偶映射、Hilbert 内积伴随 |
| $\mathcal O f,H^k_{\mathrm{dR}}(M)$ | 平均振荡上极限、de Rham 上同调 |
| $\rightharpoonup,\overset{*}{\rightharpoonup}$ | 弱、弱*收敛 |
| $\mathcal D',\mathcal S'$ | 分布、缓增分布 |
| $\widehat f$ | Fourier 系数或变换，依所在定义域区分 |
| $\mathbb E,\mathbb P,\Rightarrow$ | 期望、概率、分布收敛 |
| $\mathcal F_t,[B]_t$ | 滤过、Brown 二次变差 |

### 全书正负号核对

$\Delta=\sum\partial_j^2$，$-\Delta$ 非负；热方程 $u_t=\Delta u$；标准 Brown 生成元 $\Delta/2$。Fourier 下 $-\Delta$ 的符号为 $4\pi^2|\xi|^2$。复内积第一变量线性；分布配对不取共轭。形式边界取外法向优先。

## E. 定理索引

| 主题 | 所在位置 |
| --- | --- |
| 实数完备性、Baire | [0.6、0.12](00-foundations.md)；附录 A |
| 一致极限、幂级数、交换规则 | [1.7–1.9](01-limits.md) |
| 中值、Taylor、逆映射、隐函数、秩定理 | [2.1、2.5–2.7](02-differential.md) |
| 正则值与 Lagrange 乘子 | [2.9、2.15](02-differential.md) |
| Carathéodory、Egorov、Lusin | [3.3、3.9](03-measure.md) |
| 单调收敛、Fatou、控制收敛、Tonelli/Fubini | [3.13–3.16](03-measure.md) |
| 绝对连续与微积分基本定理 | [3.20](03-measure.md) |
| 换元、单位分解、Stokes、Poincaré 引理 | [4.2–4.5、4.8](04-stokes.md) |
| Radon–Nikodym、Stieltjes 测度 | [3.18–3.19](03-measure.md) |
| Hölder、Minkowski、完备性、Lp 对偶 | [5.2–5.4、5.12](05-functional.md) |
| Banach–Alaoglu、投影、压缩映射 | [5.13、5.15、5.18](05-functional.md) |
| 泛函分析四大定理、谱、Lax–Milgram | [5.19–5.26、5.29](05-functional.md) |
| Cauchy、Morera、留数、Rouché | [6.7–6.15](06-complex.md) |
| Riemann 映射、Weierstrass、Mittag–Leffler | [6.18–6.20](06-complex.md) |
| Fejér、Parseval、Plancherel、采样 | [7.4、7.6、7.9、7.22](07-fourier.md) |
| 极大估计、微分定理、奇异积分 | [7.15–7.18](07-fourier.md) |
| ODE 存在、Gronwall、直接方法 | [8.1–8.2、8.15](08-equations.md) |
| 大数律、CLT、鞅收敛、可选停止 | [9.5–9.6、9.10–9.11](09-probability.md) |
| Itô、SDE、Girsanov、Feynman–Kac | [9.16–9.20](09-probability.md) |
| 遍历、Céa、Hoeffding、Delta 方法 | [10.6、10.10、10.15–10.16](10-topics.md) |

## F. 参考文献与进一步阅读

下列书籍用于补齐完整证明和高级专题。首次学习宜为当前主线选择一本对应教材；参考书的存在不表示本讲义已经证明其中全部结果。

| 方向 | 教材与学习重点 |
| --- | --- |
| 基础实分析 | Terence Tao, *Analysis I–II*；Walter Rudin, *Principles of Mathematical Analysis*。练习极限、紧性、微分 |
| 测度与积分 | Gerald Folland, *Real Analysis*；Donald Cohn, *Measure Theory*。扩张、收敛、Radon–Nikodym |
| 流形与形式 | John M. Lee, *Introduction to Smooth Manifolds*。流形、单位分解、形式、Stokes |
| 泛函 | John B. Conway, *A Course in Functional Analysis*。弱拓扑、算子、谱 |
| 复分析 | Lars Ahlfors, *Complex Analysis*；Elias Stein 与 Rami Shakarchi, *Complex Analysis* |
| 调和分析 | Stein 与 Shakarchi, *Fourier Analysis*；Stein, *Singular Integrals and Differentiability Properties of Functions* |
| PDE 与变分 | Lawrence C. Evans, *Partial Differential Equations*。弱解、能量、Sobolev 与直接方法 |
| 概率与随机分析 | Rick Durrett, *Probability: Theory and Examples*；Ioannis Karatzas 与 Steven Shreve, *Brownian Motion and Stochastic Calculus* |
| 凸分析 | R. Tyrrell Rockafellar, *Convex Analysis*。次微分、共轭与对偶 |
| 数值与高维概率 | Lloyd Trefethen 与 David Bau, *Numerical Linear Algebra*；Roman Vershynin, *High-Dimensional Probability* |

可公开访问的课程资料与作者页面：

- [MIT：测度与积分课程](https://math.mit.edu/~dyatlov/125spring16/)，供第 3 章及 Lp 理论进一步阅读。
- [MIT：泛函分析讲义与练习](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/pages/lecture-notes-and-readings/)，按课程阅读 Hilbert、四大定理与紧算子。
- [John M. Lee：光滑流形教材作者页面](https://sites.math.washington.edu/~lee/Books/smooth.html)，提供教材信息与勘误入口。
- [Gregory Lawler：Brown 运动与随机微积分课程](https://www.math.uchicago.edu/~lawler/m345fmw11.html)，继续学习 Brown、Itô 与 PDE 联系。

学习进度与自测见[学习指南](study-guide.md)。
