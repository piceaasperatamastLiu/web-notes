# 附录

## A. 繁琐证明选讲 ※

### A.1 PID 的自由模子模与 Smith 唯一性

设 $N\subseteq R^n$，$R$ 为 PID。对 $n$ 归纳，把第一坐标投影的像写成理想 $(d)$。若像为零，$N$ 在 $R^{n-1}$ 内，归纳即可。若 $d\ne0$，选 $u\in N$ 第一坐标为 $d$，任何 $v\in N$ 的第一坐标为 $ad$，所以 $v-au$ 第一坐标为零。得到

$$
N=Ru\oplus\bigl(N\cap(0\oplus R^{n-1})\bigr).
$$

交为零来自 $R$ 为整环及 $d\ne0$。因此 $N$ 自由，秩不超过 $n$，同时有限生成。若 $R^n\to M$ 满射，核因而有有限基，给出有限矩阵展示。

对矩阵 $A$，令 $D_j(A)$ 为全部 $j$ 阶子式生成的理想，$D_0=R$。可逆初等行列变换保持它们：新子式是旧子式的线性组合，逆变换给反向包含。对 Smith 对角形 $d_1\mid\cdots\mid d_s$，

$$
D_j=(d_1\cdots d_j)\quad(j\le s),\qquad D_j=0\quad(j>s).
$$

故对一个固定展示矩阵，整除链在相差单位的意义下唯一。要从矩阵唯一性提升到模的唯一性，可以逐素元局部化。自由秩由 $M\otimes_R\operatorname{Frac}(R)$ 得到；对素元 $\pi$，有限长度扭部分中
$\dim_{R/(\pi)}(\pi^{a-1}M_{\rm tor,(\pi)}/\pi^aM_{\rm tor,(\pi)})$
等于 $\pi$-指数至少为 $a$ 的循环因子数。这些维数内在地确定全部素元幂因子，再按整除次序合并为不变因子。因此模结构定理的唯一性不依赖任意选定的展示。

### A.2 有限自同构群的固定域定理

设 $H=\{\sigma_1,\ldots,\sigma_n\}$ 是域 $L$ 的有限自同构群，$F=L^H$。证明 $[L:F]=n$。

先证不同域同态作为取值于 $L$ 的函数在 $L$ 上线性无关。若存在最短非零关系 $\sum_{i=1}^r a_i\sigma_i(x)=0$ 对全部 $x$ 成立，取 $\sigma_1(y)\ne\sigma_r(y)$。把关系应用于 $yx$，再减去原关系乘 $\sigma_r(y)$，得到项数更少的非零关系，矛盾。

再证任意 $n+1$ 个元素 $x_j\in L$ 在 $F$ 上相关。齐次系统 $\sum_j\sigma_i(x_j)c_j=0$ 有非零 $L$-解。选支撑最小的解，并把一个非零坐标归一为 $1$。对 $\tau\in H$，$\tau(c_j)$ 仍解，因为 $\tau$ 只置换方程行；它与原解之差在归一坐标为零，支撑更小，所以差必须为零。全部 $c_j\in F$，含恒等自同构的一行给出 $F$-线性关系。故 $d=[L:F]\le n$，特别地次数有限。

空间 $\operatorname{Hom}_F(L,L)$ 作为 $L$-空间维数为 $d$：选 $F$-基后，一个 $F$-线性映射由 $d$ 个取值决定。上述 $n$ 个自同构在其中 $L$-线性无关，故 $n\le d$，两边相等。这证明了 Galois 基本定理所使用的核心固定域结论。

### A.3 Engel 的共同零向量引理

> 若有限维线性李代数 $\mathfrak l\subseteq\operatorname{End}(V)$ 的每个元素都为幂零算子，且 $V\ne0$，则存在非零 $v$ 被全部 $\mathfrak l$ 消去。

对 $\dim\mathfrak l$ 归纳；维数为零或一时显然。取极大真子代数 $\mathfrak a$。对 $a\in\mathfrak a$，$\operatorname{ad}a$ 在 $\operatorname{End}(V)$ 上幂零，因为 $(\operatorname{ad}a)^N(T)$ 是 $a^rTa^{N-r}$ 的带符号二项式和，$N$ 足够大时每项为零。

于是 $\mathfrak a$ 在非零空间 $\mathfrak l/\mathfrak a$ 上的伴随作用由幂零算子组成。归纳给出一个非零被全部 $\mathfrak a$ 消去的陪集，其代表 $x$ 满足 $[\mathfrak a,x]\subseteq\mathfrak a$。所以正规化子严格大于 $\mathfrak a$；由极大性它等于 $\mathfrak l$，即 $\mathfrak a$ 是理想。商只能一维，否则任取一维子代数的逆像会介于二者之间。

再对 $\mathfrak a$ 在 $V$ 上的作用用归纳，得非零共同核 $W$。理想性使 $W$ 对 $\mathfrak l$ 不变。在 $W$ 上取补充元素 $x$ 的非零核向量，由于 $x$ 幂零，必能取到；它同时被 $\mathfrak a$ 消去，证明完成。

若 $\operatorname{ad}x$ 对每个 $x\in\mathfrak g$ 幂零，应用引理到伴随表示得到非零中心。对中心商归纳，商幂零；原下中心列最终落入中心，下一项即零，所以原代数幂零。这是 Engel 定理。

### A.4 本讲义证明范围

群论的 Sylow 与有限群 Jordan–Hölder、张量积构造、外代数和 Clifford 基定理、复 Clifford 分类、Maschke、Schur、特征标正交、Frobenius 互反、Lie 定理、Engel、PBW、$\mathfrak{sl}_2$ 分类与 Clebsch–Gordan 均在正文或本附录证明。

一般最高权分类是在已说明的复半单根结构输入上完整推导的；Weyl 完全可约性的平均证明使用紧实形式、积分与 Haar 测度。闭子群定理、一般李群存在与积分定理、Cartan 迹判据的逆方向、复半单根结构定理、一般 Weyl 特征公式、代数闭包存在性和 Nullstellensatz 在本讲义中借用。它们的假设与使用位置分别注明，首次学习可先掌握所证明的模型，再进入参考书补足结构理论。

## B. 常用交换图与公式

交换图的核心是复合相等。例如商映射的分解可写为

$$
\begin{array}{ccc}
X&\xrightarrow{f}&Y\\
\downarrow\pi&&\uparrow\bar f\\
X/{\sim}&\xrightarrow{\mathrm{id}}&X/{\sim}
\end{array}
$$

其含义是 $f=\bar f\circ\pi$，不要把图的排版当作额外条件。张量、诱导与长正合列中的自然性都用这种方式理解。

| 构造 | 公式与条件 |
| --- | --- |
| 群作用 | $\lvert Gx\rvert=[G:G_x]$ |
| 有限群类计数 | $\#(X/G)=\lvert G\rvert^{-1}\sum_g\lvert X^g\rvert$ |
| 有限维张量 | $\dim(V\otimes W)=\dim V\dim W$ |
| 外幂 | $\dim\Lambda^rV=\binom nr$，$n=\dim V$ |
| 对称幂 | $\dim S^rV=\binom{n+r-1}{r}$ |
| Clifford | $uv+vu=2B(u,v)$，$\operatorname{char}k\ne2$ |
| 复有限群重数 | $m_i=\langle\chi_V,\chi_i\rangle_G$ |
| 正则表示 | $\sum_i d_i^2=\lvert G\rvert$ |
| $\mathfrak{sl}_2$ | $\dim V_m=m+1$，权为 $m,m-2,\ldots,-m$ |
| Clebsch–Gordan | $V_m\otimes V_n=\bigoplus_{r=0}^{\min(m,n)}V_{m+n-2r}$ |

## C. 经典反例集

### C.1 Lagrange 定理不能反向使用

$A_4$ 阶为 $12$，却没有阶为 $6$ 的子群。若存在，指数二使它正规，给出满同态 $A_4\to C_2$。但全部三循环必须送到单位元，三循环又生成 $A_4$，矛盾。

### C.2 可解不等于幂零

$S_3$ 的导出列在两步终止。另一方面 $[S_3,A_3]=A_3$，下中心列一直停在 $A_3$，所以不幂零。计算一个换位与三循环的交换子就能得到 $A_3$ 的生成元。

### C.3 分裂不等于可对角化

$\begin{pmatrix}1&1\\0&1\end{pmatrix}$ 的特征多项式分裂，但特征空间只有一维。它的最小多项式有重根，这才是障碍。

### C.4 无限维对偶识别的限制

对可数基空间，任意 $V^*\otimes V$ 元素都是有限纯张量之和，对应有限秩算子。恒等算子秩无限，因此 $\operatorname{End}(V)\cong V^*\otimes V$ 不能在此成立。

### C.5 平均与极化的特征条件

特征 $p$ 中无法用 $1/p$ 平均 $C_p$ 的作用；非平凡幂零 Jordan 块给出不完全可约表示。特征二中 $q(v)=B(v,v)$ 也不能由本讲义的除以二公式恢复 $B$。这是公式的代数前提，不是记号问题。

### C.6 李代数不决定全局群

$\mathbb R$ 与圆群有相同的一维交换李代数，前者单连通、后者有周期。$\operatorname{SU}(2)$ 与 $\operatorname{SO}(3)$ 也共享李代数，但中心和表示能否下降不同。

## D. 符号表

跨讲义的约定见[共同符号约定](../notation.md)。本表只补充所在讲义的专门记号。

| 符号 | 含义 |
| --- | --- |
| $G_x,C_G(x),N_G(H)$ | 稳定子、中心化子、正规化子 |
| $G',\gamma_rG$ | 导出子群、下中心列 |
| $R/(d),\operatorname{Frac}R$ | 主理想商、分式域 |
| $V^*,T^*,T^\dagger$ | 代数对偶、对偶映射、内积伴随 |
| $T(V),S(V),\Lambda V$ | 张量、对称、外代数 |
| $\mathrm{Cl}(V,q),\mathrm{Cl}_{p,q}$ | Clifford 代数，正负平方数为 $p,q$ |
| $\chi_V,\operatorname{ch}V$ | 群特征标、权的形式特征标 |
| $\mathfrak h,\Phi,W$ | Cartan 子代数、根系、Weyl 群 |
| $U(\mathfrak g),M_\lambda,L_\lambda$ | 包络代数、Verma 模、最高权简单模 |
| $H_n,H^n,\operatorname{Ext},\operatorname{Tor}$ | 同调、上同调、导出函子 |
| $m_G,m_K$ | 有限群计数测度、紧群归一化 Haar 测度 |

## E. 定理索引

群论：[Lagrange、同构定理](01-groups.md#13-lagrange)、[轨道—稳定子](01-groups.md#19)、[Sylow](01-groups.md#116-sylow)、[Jordan–Hölder](01-groups.md#118-jordanholder)。

环与域：[PID 模结构](02-rings.md#211-pid)、[有限域](02-rings.md#212)、[Galois 基本定理](02-rings.md#217-galois)。线性代数：[极化与惯性](03-linear.md#36)、[对角化](03-linear.md#37)、[谱定理](03-linear.md#310)。

多重线性：[张量积构造](04-multilinear.md#43)、[外代数基](04-multilinear.md#410)、[Clifford 基](04-multilinear.md#413-clifford)、[复 Clifford 分类](04-multilinear.md#416-clifford)。

表示论：[Maschke](05-representations.md#53-maschke)、[Schur](05-representations.md#54-schur)、[正交关系](05-representations.md#56)、[Frobenius](05-representations.md#512-frobenius)。

李代数：[Lie 定理](06-lie.md#69)、[PBW](06-lie.md#620-pbw)、[最高权](06-lie.md#622)、[Clebsch–Gordan](06-lie.md#625-clebschgordan)；[长正合列](07-advanced.md#77)。

也可使用站内搜索，直接输入定理名称。

## F. 参考文献与进一步阅读

以下书目用于补足证明与练习。先围绕正在学习的主题选一部，逐节核对定义与符号；尤其要注意 Clifford 平方正负号、复内积线性变量和 Fourier 变换中的逆元约定。

1. Dummit 与 Foote，*Abstract Algebra*：群、环、模、域的系统入门，适合补充第 1–2 章习题。
2. Artin，*Algebra*：以线性代数、对称和具体例子组织抽象代数，适合本讲义主线。
3. Axler，*Linear Algebra Done Right*：空间、算子与谱理论，对应第 3 章。
4. Greub，*Multilinear Algebra*：张量、外代数与多重线性构造，对应第 4 章前半。
5. Lawson 与 Michelsohn，*Spin Geometry*：Clifford 与旋量的几何理论，需另补流形知识。
6. Serre，*Linear Representations of Finite Groups*：有限群特征标、诱导与模表示，对应第 5 章。
7. Fulton 与 Harris，*Representation Theory: A First Course*：有限群和李代数的具体表示、权与张量分解。
8. Humphreys，*Introduction to Lie Algebras and Representation Theory*：Cartan 判据、根结构与最高权理论，适合补足第 6 章结构输入。
9. Hall，*Lie Groups, Lie Algebras, and Representations*：矩阵李群、积分与全局群形式。
10. Weibel，*An Introduction to Homological Algebra*：解消、Ext/Tor 与谱序列，对应第 7 章前半。
11. Atiyah 与 Macdonald，*Introduction to Commutative Algebra*：局部化、整性与诺特性。
12. Cox、Little 与 O'Shea，*Ideals, Varieties, and Algorithms*：多项式理想、Gröbner 基及几何计算。

可公开查阅的课程讲义包括 Pavel Etingof 的 [MIT《Lie Groups and Lie Algebras I & II》](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf)，可补读李群、根结构、Verma 模与最高权；Peter Woit 的 [《Clifford Algebras and Spin Groups》](https://www.math.columbia.edu/~woit/LieGroups-2012/cliffalgsandspingroups.pdf) 可配合旋量部分阅读。使用后一份讲义时先比较平方的正负号约定。
