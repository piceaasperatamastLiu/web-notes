# 第 5 章 表示论 ★

群元素本身可能难以分类，但若让它们作为矩阵作用，就可以使用不变子空间、迹与内积。表示论不只是给群写一套矩阵，它还研究哪些线性模型不可再分，以及任意模型如何由这些基本模型组合而成。

前四节允许一般域并明确所需条件。从特征标开始，固定有限群 $G$、复数域及有限维表示。

## 5.1 群表示与模语言

> 群表示是同态 $\rho:G\to\mathrm{GL}(V)$。表示之间的态射 $T:V\to W$ 满足 $T\rho_V(g)=\rho_W(g)T$，称交织映射。

把 $\rho$ 线性延伸到 $kG$，就得到左模。等变映射恰为模同态，因此两个语言描述同一个理论。忠实表示要求 $\rho$ 单射，而不可约表示要求不变子空间只有 $0,V$；二者含义不同。

例子贯穿本章：$S_3$ 置换 $\mathbb C^3$ 的坐标。常数向量线 $L=\mathbb C(1,1,1)$ 不变，坐标和为零的平面 $U$ 也不变，且 $\mathbb C^3=L\oplus U$。

## 5.2 子表示、商表示与不可约表示

若 $W\subseteq V$ 对所有 $\rho(g)$ 不变，称子表示；商 $V/W$ 的作用按代表元定义。非零表示若无真非零子表示，称不可约。

$S_3$ 的平面 $U$ 不可约。三循环在 $U$ 上有两个互异特征值 $\omega,\omega^2$，任何不变直线必须是其中一条特征线；一个换位把两条线交换，所以没有同时对全部群元素不变的直线。这使用了共同不变子空间，而非某一个矩阵的对角化。

## 5.3 完全可约性与 Maschke 定理

> 若 $G$ 有限，且 $\operatorname{char}k\nmid\lvert G\rvert$，每个有限维表示都是不可约表示的直和。

设 $W$ 为不变子空间，先选任意线性投影 $p:V\to W$，定义平均投影

$$
P=\frac1{\lvert G\rvert}\sum_{g\in G}\rho(g)p\rho(g)^{-1}.
$$

每项像在 $W$，并在 $W$ 上为恒等，所以 $P(V)\subseteq W$、$P|_W=I$。重标求和指标可得 $P$ 与群作用交换。因此 $\ker P$ 不变，$V=W\oplus\ker P$。按维数归纳得到不可约分解。这一证明说明条件为何必要：平均需要能除以群阶。

复数域上也可平均一个正定内积，使所有群元素酉；不变子空间的正交补随后不变。分解唯一性还需要 Schur 引理。

## 5.4 Schur 引理

> 两个不可约表示之间的非零交织映射是同构。在代数闭域上的有限维不可约表示中，每个自交织映射都是标量。

第一句因为核与像都是不变子空间。第二句取自交织算子 $T$ 的一个特征值 $\lambda$；$T-\lambda I$ 有非零核，故由第一句只能为零。代数闭性保证特征值存在。

一般域上只能断言 $\operatorname{End}_G(V)$ 为除环。例如实平面的 $90^\circ$ 旋转所生成的 $C_4$ 表示不可约，但其自交织环是 $\mathbb C$，不仅是实标量。后面的复特征标理论不遇到这一问题。

## 5.5 特征标

定义 $\chi_V(g)=\operatorname{tr}\rho(g)$。迹在共轭下不变，所以它是类函数。直和使特征标相加，张量积使特征标相乘。

平均内积后 $\rho(g)$ 酉，所以 $\chi_V(g^{-1})=\overline{\chi_V(g)}$。特征标在单位元的值是维数。这些很少的数字将完整决定复有限群表示的同构类。

$S_3$ 有三种共轭类：单位元、换位、三循环，大小为 $1,3,2$。平凡、符号与平面表示的特征标分别为

$$
\begin{array}{c|rrr}
&1&(12)&(123)\\ \hline
\mathbf1&1&1&1\\
\mathrm{sgn}&1&-1&1\\
U&2&0&-1
\end{array}
$$

最后一行由置换表示的迹等于固定点个数，再减去平凡表示得到。

## 5.6 特征标正交关系 ★

类函数内积取第一变量线性：

$$
\langle f,h\rangle_G=\frac1{\lvert G\rvert}
\sum_{g\in G}f(g)\overline{h(g)}.
$$

在 $\operatorname{Hom}(W,V)$ 上令 $g\cdot A=\rho_V(g)A\rho_W(g)^{-1}$。平均作用算子是投影到 $\operatorname{Hom}_G(W,V)$。投影的迹等于像的维数，而单个作用算子的迹为 $\chi_V(g)\chi_W(g^{-1})$，由张量—Hom 识别或矩阵单位展开可得。因此

$$
\langle\chi_V,\chi_W\rangle_G
=\dim\operatorname{Hom}_G(W,V).
$$

对不可约表示，Schur 引理给出内积为 $1$ 或 $0$。若 $V=\bigoplus_i m_iV_i$，则 $m_i=\langle\chi_V,\chi_i\rangle$。由此分解的重数唯一，特征标相同当且仅当表示同构。

后面 Fourier 变换还需要矩阵系数正交。对酉不可约表示 $\rho,\sigma$，平均映射 $A\mapsto\frac1{|G|}\sum_g\rho(g)A\sigma(g)^{-1}$ 在不等价时为零；在相同表示时由 Schur 为标量，取迹知等于 $(\operatorname{tr}A/d)I$。取 $A$ 为矩阵单位便得

$$
\frac1{|G|}\sum_g\rho(g)_{ij}\overline{\sigma(g)_{kl}}
=\begin{cases}
\delta_{ik}\delta_{jl}/d_\rho,&\rho=\sigma,\\
0,&\rho\not\cong\sigma.
\end{cases}
$$

## 5.7 正则表示

左正则表示在 $\mathbb CG$ 的基 $\delta_g$ 上作用为 $h\delta_g=\delta_{hg}$。非单位元没有固定基向量，所以 $\chi_{\rm reg}(1)=|G|$，其余值为零。

每个不可约表示都出现在正则表示中。取非零 $v\in V$，映射 $\mathbb CG\to V$，$\sum a_gg\mapsto\sum a_g\rho(g)v$ 的像是不变且非零，故满；Maschke 定理使该商也是正则表示的直和因子。

重数公式给出每个不可约 $V_i$ 出现 $d_i=\dim V_i$ 次，于是

$$
\mathbb CG\cong\bigoplus_i V_i^{\oplus d_i}.
$$

## 5.8 不可约表示的维数定理

取上式维数得到

$$
\sum_i d_i^2=|G|.
$$

还有不可约表示数等于共轭类数。映射

$$
\mathbb CG\longrightarrow\bigoplus_i\operatorname{End}(V_i)
$$

把群代数元送到其在各不可约上的作用。若它在全部不可约上为零，也在正则表示上为零；正则表示忠实，故映射单射。维数平方和说明两边同维，因此为代数同构。右边中心维数为不可约个数；左边中心恰由各共轭类的类和组成基，结论成立。这样也证明不可约特征标是全部类函数的正交基。

有时“维数定理”还指 $d_i\mid|G|$。这是更强的整除定理，涉及代数整数，本章不证明也不在后文使用。不要把平方和公式误当成整除的证明。

## 5.9 张量积表示

在 $V\otimes W$ 上令 $g(v\otimes w)=gv\otimes gw$。张量泛性质使作用良定义，且特征标为乘积。对偶表示取

$$
(g\lambda)(v)=\lambda(g^{-1}v),
$$

逆元保证它是左作用，特征标为 $\overline{\chi_V}$。

以 $S_3$ 为例，$\chi_{U\otimes U}=(4,0,1)$。分别与三行特征标作内积，重数均为一，所以

$$
U\otimes U\cong\mathbf1\oplus\mathrm{sgn}\oplus U.
$$

计算重数时必须乘上类大小，不能只把特征标表三列当等权向量。

## 5.10 对称幂与外幂表示

因子置换与对角群作用交换，所以对称、外幂都是表示。由特征值的乘积展开，

$$
\chi_{S^2V}(g)=\frac{\chi_V(g)^2+\chi_V(g^2)}2,\qquad
\chi_{\Lambda^2V}(g)=\frac{\chi_V(g)^2-\chi_V(g^2)}2.
$$

对 $U$ 计算得 $\Lambda^2U=\mathrm{sgn}$，$S^2U\cong\mathbf1\oplus U$，与上节一致。高次幂可用生成函数

$$
\sum_{r\ge0}\chi_{\Lambda^rV}(g)t^r=\det(I+t\rho(g)),\qquad
\sum_{r\ge0}\chi_{S^rV}(g)t^r=\det(I-t\rho(g))^{-1}.
$$

## 5.11 诱导表示

子群 $H\le G$ 的表示 $W$ 可以扩展为一个容纳全部陪集的表示：

$$
\operatorname{Ind}_H^G W=\mathbb CG\otimes_{\mathbb CH}W.
$$

选左陪集代表 $t_i$，$\mathbb CG$ 作为右 $\mathbb CH$-模是 $\bigoplus_i t_i\mathbb CH$，所以诱导空间为 $\bigoplus_i t_i\otimes W$，维数为 $[G:H]\dim W$。群作用先把 $gt_i$ 改写为 $t_jh$，再让 $h$ 作用于 $W$。

特征标为

$$
\chi_{\rm Ind}(g)=\frac1{|H|}
\sum_{\substack{x\in G\\x^{-1}gx\in H}}\chi_W(x^{-1}gx).
$$

证明中只有被 $g$ 固定的陪集对迹有贡献；每个固定陪集对应 $|H|$ 个代表，因而出现该分母。

## 5.12 Frobenius 互反律 ★

> 有自然同构
> $$
> \operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)
> \cong\operatorname{Hom}_H(W,\operatorname{Res}_H^GV).
> $$

把左边的 $F$ 限制为 $w\mapsto F(1\otimes w)$。逆向给定 $H$-等变 $f$，定义 $F(g\otimes w)=g f(w)$。平衡关系 $gh\otimes w=g\otimes hw$ 两边有相同像，故良定义；再检验 $G$-等变性。两构造互逆，证明完成。

结合重数公式即得诱导与限制的特征标互反。例子：从 $S_2$ 的平凡表示诱导到 $S_3$，得到三点置换表示 $\mathbf1\oplus U$。

## 5.13 有限群 Fourier 变换初步

固定每个不可约的一组酉基，定义

$$
\widehat f(\rho)=\sum_{g\in G}f(g)\rho(g),\qquad
(f*h)(x)=\sum_y f(y)h(y^{-1}x).
$$

令 $x=yz$ 展开，直接得到 $\widehat{f*h}=\widehat f\,\widehat h$。注意这里变换中用 $\rho(g)$；若改用 $\rho(g^{-1})$，卷积次序也要相应调整。

由正则特征标恒等式 $\sum_\rho d_\rho\chi_\rho(x)=|G|\delta_{x,1}$，

$$
f(g)=\frac1{|G|}\sum_\rho d_\rho
\operatorname{tr}\bigl(\widehat f(\rho)\rho(g^{-1})\bigr).
$$

把定义代入右边，内层类函数和恰好只保留 $x=g$ 项，证明逆变换。矩阵系数正交再给出 Plancherel 公式

$$
\sum_g|f(g)|^2=\frac1{|G|}\sum_\rho d_\rho
\|\widehat f(\rho)\|_{\rm HS}^2.
$$

Abel 群的不可约表示都是一维，矩阵变换退化为普通离散 Fourier 变换；非交换群必须保留矩阵信息。

## 5.14 结合代数表示初步

代数表示是同态 $A\to\operatorname{End}(V)$，等价于左模。对 $M_n(k)$，标准模 $k^n$ 是唯一简单模。

证明利用矩阵单位 $E_{ij}$。任意模 $M$ 由 $E_{ii}$ 分解为 $\bigoplus_i E_{ii}M$，且 $E_{ij}$ 给各分量之间的同构。映射 $k^n\otimes E_{11}M\to M$，$e_i\otimes m\mapsto E_{i1}m$ 是模同构，其逆由 $m\mapsto\sum_i e_i\otimes E_{1i}m$ 给出。因此简单性恰要求 $\dim E_{11}M=1$。

对代数直积 $A\oplus B$，两个中心幂等元把任意模分成两部分；简单模只能来自其中一边。这为 Clifford 分类提供最后一步。

## 5.15 Clifford 代数表示与旋量

第 4 章给出复 Clifford 代数的矩阵分类，本节将它转成表示。偶维 $2m$ 的不可约 Clifford 模维数 $2^m$，奇维 $2m+1$ 有两个维数 $2^m$ 的不可约模。

Spin 群在偶子代数内，必须把表示限制到偶子代数再讨论。复偶子代数满足 $\mathrm{Cl}_{n}^{0}\cong\mathrm{Cl}_{n-1}$：在正交基中可用 $i e_j e_n$，$j<n$，作平方为 $+1$ 的生成元，基与维数验证同构。

因此 $\operatorname{Spin}(2m)$ 的复旋量分为两个半旋量空间，每个维数 $2^{m-1}$；$\operatorname{Spin}(2m+1)$ 的旋量空间维数 $2^m$。这些限制确实不可约，因为 Spin 的偶单位向量乘积线性张成偶 Clifford 代数。奇维的两个 Clifford 简单模限制后得到同构的 Spin 表示。低维例子 $\operatorname{Spin}(3)$ 对应二维复旋量，向量表示则为三维。

## 5.16 模表示初步 ☆

这里“模表示”指特征 $p$ 整除 $|G|$ 的模块化表示，和一般“用模描述表示”不同。取 $G=C_p$，在 $\mathbb F_p$ 上令生成元作用为非平凡 Jordan 块 $I+N$，$N^p=0$。因为 $(I+N)^p=I$，确实得到表示，却一般不能分解为不可约直和。

此时群代数具有幂零理想，平均投影失效，普通复特征标也不能恢复扩张信息。进一步需要投射模、块与 Brauer 特征标；本讲义只保留这个失败机制。

## 5.17 表示论与张量范畴初步 ☆

表示之间有直和、张量、对偶以及等变映射。张量积的结合与交换同构都保持群作用，所以这些对象共同组成对称张量范畴。

一维表示在张量下形成群，高维表示的张量分解则形成表示环。例如 $S_3$ 中 $[U]^2=[\mathbf1]+[\mathrm{sgn}]+[U]$。这种记号保留分解规律，忽略某一次基的选择，适合与 Lie 最高权理论比较。

## 练习

1. 完整核对 $S_3$ 三个特征标的正交关系及维数平方和。
2. 计算 $U\otimes\mathrm{sgn}$，并由特征标证明它同构于 $U$。
3. 求 $\operatorname{Ind}_{A_3}^{S_3}\mathbf1$ 的分解。答案为 $\mathbf1\oplus\mathrm{sgn}$。
4. 用矩阵系数正交证明本章 Plancherel 公式，检查因子 $d_\rho/|G|$。
5. 构造 $\mathbb F_2$ 上 $C_2$ 的二维不可完全约表示，指出唯一不变直线为什么没有不变补。
6. 证明有限 Abel 群的复不可约表示均一维。提示：所有群元素都是自交织算子，再用 Schur 引理。
