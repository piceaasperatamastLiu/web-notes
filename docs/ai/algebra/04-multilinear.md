# 第 4 章 多重线性代数与 Clifford 代数 ★

两个向量能否“相乘”？内积会把它们变成一个数，外积记录它们张成的有向面积，矩阵外积得到秩一算子。张量积先保留一个最一般的双线性乘积，再让不同的应用通过线性映射提取所需信息。这是本章的出发点。

本章 $k$ 为域。对称张量的平均化、Clifford 代数与正交群部分会另加特征条件；不能把特征零的公式无条件搬到有限域。

## 4.1 多重线性映射

映射 $b:V_1\times\cdots\times V_r\to W$ 若固定其他变量后对每一个变量都线性，称多重线性。矩阵乘法、双线性型与行列式都是例子。它不等于从直积空间到 $W$ 的普通线性映射：双线性映射满足 $b(av,cw)=ac\,b(v,w)$，而不是只出现一个倍数。

选基后，多重线性映射完全由各组基向量上的值决定。问题在于，能否把这种决定关系写成一个不依赖选基的线性映射？张量积就是回答。

## 4.2 张量积的定义与泛性质

> $V\otimes W$ 连同双线性映射 $(v,w)\mapsto v\otimes w$ 满足：对任何双线性 $b:V\times W\to U$，存在唯一线性 $\widetilde b:V\otimes W\to U$，使 $\widetilde b(v\otimes w)=b(v,w)$。

于是 $v\otimes w$ 必满足双加性和数乘关系。一般张量是有限个纯张量之和，并不一定是单个纯张量。例如若 $e_1,e_2$ 是基，$e_1\otimes e_1+e_2\otimes e_2$ 对应单位矩阵，秩为二，因此不能表示成一个秩一外积。

泛性质的用途是：定义张量积上的映射时，先在纯张量上写公式，再证明原公式双线性，延伸与唯一性就自动成立。

## 4.3 存在性与唯一性 ※

以所有符号 $[v,w]$ 为基构造自由向量空间 $F$，令 $R$ 由

$$
[v+v',w]-[v,w]-[v',w],\quad
[v,w+w']-[v,w]-[v,w'],\quad
[av,w]-a[v,w],\quad[v,aw]-a[v,w]
$$

生成。定义 $V\otimes W=F/R$，$v\otimes w=[v,w]+R$。这些关系使结构映射双线性。

给定 $b$，先唯一线性延伸为 $F\to U$。双线性恰好保证它在 $R$ 上为零，所以经商得到 $\widetilde b$。纯张量生成商空间，保证延伸唯一。这完成存在性。

记所构造的对象为 $T=V\otimes W$。若另一个对象 $T'$ 有同样泛性质，结构映射分别诱导 $T\to T'$ 与 $T'\to T$。复合在每个纯张量上为恒等，由唯一性即为恒等。因此张量积在保持结构映射的唯一同构意义下唯一。

## 4.4 坐标表示与指标运算

若 $e_i,f_j$ 分别是 $V,W$ 的基，$\varepsilon^i,\eta^j$ 为相应对偶基，则 $e_i\otimes f_j$ 构成张量积的基。生成性由双线性展开得到；无关性可用坐标双线性函数 $(v,w)\mapsto\varepsilon^i(v)\eta^j(w)$ 逐个提取系数。因此

$$
\dim(V\otimes W)=\dim V\,\dim W,\qquad
t=\sum_{i,j}t^{ij}e_i\otimes f_j.
$$

对 $V^{\otimes r}\otimes(V^*)^{\otimes s}$，向量因子的坐标记上指标，对偶因子的坐标记下指标。指标的位置反映换基方式，而不是装饰：向量坐标按 $P^{-1}$ 变换，对偶坐标按 $P^{\mathsf T}$ 变换。

## 4.5 缩并与 Einstein 求和

求值映射 $V^*\otimes V\to k$，$\lambda\otimes v\mapsto\lambda(v)$，可以消去一对对偶因子，这叫缩并。例如 $A\in V\otimes V^*$ 对应算子时，缩并得到 $A^i_i=\operatorname{tr}A$。

Einstein 约定是在同一项中一个上指标与一个下指标重复时求和。于是 $y^i=A^i_jx^j$ 表示矩阵乘法。自由指标在等式两边必须一致，哑指标可改名；不能把出现三次的同一个指标当成合法缩并。

非退化双线性型 $B$ 给出线性同构 $V\to V^*$，$v\mapsto B(\,\cdot\,,v)$，此时可写 $x_i=B_{ij}x^j$。一般空间没有自然的“降指标”操作。复内积给出的 $v\mapsto\langle\,\cdot\,,v\rangle$ 则是共轭线性的；在第一变量线性的约定下，不能把它与双线性型的公式混用。

## 4.6 结合性、交换性与函子性

公式 $(u\otimes v)\otimes w\mapsto u\otimes(v\otimes w)$ 由三线性泛性质诱导自然同构，交换两因子的映射 $v\otimes w\mapsto w\otimes v$ 也自然可逆。

线性映射 $f,g$ 给出 $f\otimes g$，且 $(f'\otimes g')(f\otimes g)=(f'f)\otimes(g'g)$。所谓自然性，就是这些同构与线性映射相容；不必为每个空间另选一组基。

普通向量空间交换因子没有负号。外代数中出现的符号来自其商关系，分次向量空间的交换规则则是另一种结构。

## 4.7 张量代数

把任意有限次乘积同时放进一个对象：

$$
T(V)=\bigoplus_{r\ge0}V^{\otimes r},\qquad V^{\otimes0}=k.
$$

乘法连接张量，次数相加，单位为 $1\in k$。元素只含有限多个非零次数部分。

> 任意线性映射 $f:V\to A$，其中 $A$ 为有单位结合 $k$-代数，唯一延伸为代数同态 $T(V)\to A$。

延伸把 $v_1\otimes\cdots\otimes v_r$ 送到 $f(v_1)\cdots f(v_r)$。多重线性保证它在线性层面良定义，张量串接的乘法定义保证延伸保持乘法。因 $V$ 生成 $T(V)$，延伸唯一。这是“没有额外乘法关系”的代数。

## 4.8 商代数与结合代数初步

若希望乘积遵守关系，可对 $T(V)$ 的双侧理想取商。双侧性使关系在左右乘任意表达式后仍成立。

例如给定生成元 $x,y$，商 $k\langle x,y\rangle/(xy-yx)$ 要求它们交换，而商 $(xy+yx)$ 要求反交换。非交换多项式代数的词有顺序，$xy$ 与 $yx$ 原本不同。

给商代数定义表示时，只需给生成元指定算子并检验它们满足关系。这是 Clifford 表示和普遍包络代数表示的共同方法。

## 4.9 对称张量与对称代数

对称代数定义为

$$
S(V)=T(V)/(u\otimes v-v\otimes u:u,v\in V).
$$

选基后，交换关系允许把每个词排列成 $e_1^{a_1}\cdots e_n^{a_n}$。向多项式环 $k[x_1,\ldots,x_n]$ 的双向生成元映射互逆，所以这些单项式确实构成基。$S(V)$ 是由 $V$ 自由生成的交换代数。

$S^rV$ 是次数 $r$ 的商，即张量幂在置换作用下的余不变量。另一方面，$V^{\otimes r}$ 内固定于全部置换的元素称对称张量。若 $r!$ 在 $k$ 中可逆，平均算子 $\frac1{r!}\sum_{\sigma\in S_r}\sigma$ 将二者自然识别；若特征整除 $r!$，这一识别不能照搬。

## 4.10 外代数与行列式

外代数定义为

$$
\Lambda V=T(V)/(v\otimes v:v\in V).
$$

写乘法为 $\wedge$。展开 $(u+v)\wedge(u+v)=0$ 得到 $u\wedge v=-v\wedge u$；即使特征为 $2$，定义仍要求 $v\wedge v=0$，不能只用反交换关系代替。

> 若 $\dim V=n$，则 $\Lambda^rV$ 的基是 $e_{i_1}\wedge\cdots\wedge e_{i_r}$，$i_1<\cdots<i_r$，故维数为 $\binom nr$。

关系允许把词排序，重复指标的项为零，得到生成性。对每组严格递增指标，取向量坐标相应子矩阵的行列式，它是交替多线性函数，故通过商诱导泛函；在上述候选基上取值为 Kronecker 符号，得到无关性。

$\Lambda^n V$ 是一维。算子 $A$ 在其上的作用是乘以一个标量，定义它为 $\det A$。复合映射诱导复合，立即得到 $\det(AB)=\det A\det B$；展开基向量的外积恢复熟悉的置换公式。

## 4.11 张量积与 Hom

线性映射 $V\otimes W\to U$ 与线性映射 $V\to\operatorname{Hom}(W,U)$ 一一对应，规则为 $F\mapsto(v\mapsto(w\mapsto F(v\otimes w)))$。这就是张量—Hom 伴随，任意维度成立。

若 $V$ 有限维，还有

$$
V^*\otimes W\cong\operatorname{Hom}(V,W),
\qquad \lambda\otimes w\mapsto(v\mapsto\lambda(v)w).
$$

选基后的逆为 $A\mapsto\sum_i\varepsilon^i\otimes A(e_i)$。虽然公式用了基，正向映射本身无坐标，且逆唯一，所以结果自然。无限维时，左边只产生有限秩算子，不能代表恒等映射等一般算子。

## 4.12 对称幂与外幂

每个 $A:V\to W$ 诱导 $S^rA$ 与 $\Lambda^rA$，分别把单项式或外积中的每个因子送过 $A$。例如 $\Lambda^2A$ 的矩阵项是 $A$ 的二阶子式。

若 $A$ 的特征值为 $\lambda_i$，则 $S^rA$ 的特征值是允许重复的 $r$ 个 $\lambda_i$ 之积，而 $\Lambda^rA$ 只取互异指标。可以先在三角基中观察对角项，不必要求 $A$ 可对角化。维数为

$$
\dim S^rV=\binom{n+r-1}{r},\qquad
\dim\Lambda^rV=\binom nr.
$$

## 4.13 Clifford 代数：定义与泛性质 ★

本节 $\operatorname{char}k\ne2$，$q(v)=B(v,v)$，$B$ 对称。外代数把向量的平方设为零；Clifford 代数改为保留二次型：

$$
\mathrm{Cl}(V,q)=T(V)/(v\otimes v-q(v)1:v\in V).
$$

于是 $uv+vu=2B(u,v)1$。任何线性映射 $c:V\to A$ 满足 $c(v)^2=q(v)1$，都唯一延伸为 Clifford 代数同态。这允许用矩阵实现 Clifford 关系。

关系把二次词与标量联系起来，所以通常没有按词长的整数分次，但保留词长奇偶的 $\mathbb Z/2\mathbb Z$ 分次。记偶、奇部分为 $\mathrm{Cl}^0,\mathrm{Cl}^1$；$\mathrm{Cl}^0$ 是偶子代数，不只是标量。

> 若 $e_1,\ldots,e_n$ 是 $V$ 的基，则严格递增的单项式 $e_{i_1}\cdots e_{i_r}$（包括 $1$）为 Clifford 代数的基。因此维数为 $2^n$。

反交换关系把任意词排序，平方关系消去重复指标，先得生成性。为证明无关性，在 $\Lambda V$ 上定义 $L_v(\omega)=v\wedge\omega$ 和收缩

$$
\iota_v(w_1\wedge\cdots\wedge w_r)
=\sum_{j=1}^r(-1)^{j-1}B(v,w_j)
w_1\wedge\cdots\widehat{w_j}\cdots\wedge w_r.
$$

直接展开得 $L_v^2=\iota_v^2=0$、$\iota_vL_v+L_v\iota_v=q(v)I$，所以 $c(v)=L_v+\iota_v$ 满足 Clifford 关系。严格递增词的算子作用于 $1$，最高外次数部分正好是对应外积，其余部分次数更低。若这些词线性相关，取最大词长，最高次部分的外积基迫使该长度全部系数为零，逐级下降得全部系数为零。这完成证明，也说明 $V$ 确实嵌入 Clifford 代数。

## 4.14 Clifford 代数与正交群

若 $q(u)\ne0$，则 $u^{-1}=u/q(u)$。利用 Clifford 关系，

$$
-uvu^{-1}=v-\frac{2B(u,v)}{q(u)}u.
$$

右边是沿 $u$ 的正交反射：把 $u$ 反向，固定 $u^\perp$。负号不能省略；普通共轭 $uvu^{-1}$ 给出反射的负。

实正定空间中的任何正交变换都是反射的乘积。取单位向量 $v$；若 $Av\ne v$，沿 $Av-v$ 的反射把 $Av$ 送到 $v$，复合后固定 $v$，从而限制到 $v^\perp$。若已固定 $v$，直接限制。按维数归纳完成，至多使用 $\dim V$ 个反射。这是正定情形的 Cartan–Dieudonné 定理；一般非退化型的版本需另处理各向同性向量，本章不使用其证明。

## 4.15 旋量群与旋量表示初步

本节取实正定 $n$ 维空间，$n\ge2$。由单位向量的乘积组成 $\operatorname{Pin}(n)$，其中偶数个单位向量的乘积组成 $\operatorname{Spin}(n)$。偶数次反射的负号相消，所以

$$
\pi:\operatorname{Spin}(n)\to\operatorname{SO}(n),
\qquad \pi(a)v=ava^{-1}
$$

是满同态：上节反射分解的长度奇偶由行列式决定。

核恰为 $\{\pm1\}$。核元素在偶 Clifford 子代数中且与所有向量交换；在正交基单项式中逐个检验交换关系，只可能是标量。反序运算 $\widetilde{u_1\cdots u_r}=u_r\cdots u_1$ 使每个 Spin 元素满足 $a\widetilde a=1$，所以核标量平方为 $1$。这先给出一个二对一群同态；结合李群结构，它是通常的双覆盖。

旋量是 Clifford 模或相应 Spin 模的向量，而不是空间 $V$ 中的普通向量。它的变换律来自代数作用。把 $\mathrm{Cl}_n(\mathbb C)$ 的表示限制到实 $\operatorname{Spin}(n)$，就得到复旋量表示。

## 4.16 Clifford 代数表示初步 ★

本节 $\mathrm{Cl}_n(\mathbb C)$ 是 $\mathbb C^n$ 上二次型 $q(z)=\sum_{j=1}^n z_j^2$ 的 Clifford 代数，每个标准生成元平方为 $+1$。

定义 Pauli 矩阵

$$
X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

它们平方为 $I$，两两反交换，且 $XY=iZ$。因此 $\mathrm{Cl}_2(\mathbb C)\cong M_2(\mathbb C)$：把两个生成元送到 $X,Y$，它们生成全部矩阵，两边维数均为四。

更一般地，旧生成元送到 $e_j\otimes Z$，新增两个送到 $1\otimes X,1\otimes Y$，得到

$$
\mathrm{Cl}_{n+2}(\mathbb C)\cong
\mathrm{Cl}_n(\mathbb C)\otimes M_2(\mathbb C).
$$

新增元的乘积生成 $1\otimes Z$，再恢复 $e_j\otimes1$，故映射满；基定理给出相同维数，故为同构。从 $\mathrm{Cl}_0=\mathbb C$、$\mathrm{Cl}_1\cong\mathbb C\oplus\mathbb C$ 归纳，

$$
\mathrm{Cl}_{2m}(\mathbb C)\cong M_{2^m}(\mathbb C),\qquad
\mathrm{Cl}_{2m+1}(\mathbb C)\cong
M_{2^m}(\mathbb C)\oplus M_{2^m}(\mathbb C).
$$

矩阵代数有唯一简单模，证明见 5.14。因此偶维有一个不可约 Clifford 模，奇维有两个。实 Clifford 代数的分类不同，不能直接把这些复矩阵结论当作实分类。

## 4.17 张量范畴初步 ☆

向量空间、线性映射、张量积与单位对象 $k$ 构成最基本的张量范畴。这里的重点是记录结构之间的相容性：结合同构、单位同构和交换同构共同保证括号和因子交换能一致处理。

群表示也可张量，单位是平凡表示，交换因子仍是等变映射。加入对偶、求值与余求值，就能用封闭回路表达维数或迹。第 7 章的 Hopf 代数解释为什么一个代数的模可以具有这种张量结构。

## 4.18 张量网络与图形演算初步 ☆

把一个张量画成节点，每个向量或对偶因子画成一条腿，连接一对相配的腿表示求值缩并。例如两个矩阵的连接表示 $C^i_k=A^i_jB^j_k$，闭合源与目标表示迹。

图能帮助记住哪些指标求和，却不能替代类型检查：只有空间与其对偶的腿能自然连接。若没有指定内积，两条同为 $V$ 的腿不能直接缩并。张量网络计算的复杂度还取决于缩并次序，这是计算专题而不是泛性质的内容。

## 练习

1. 用坐标证明 $e_1\otimes e_1+e_2\otimes e_2$ 不是纯张量。提示：纯张量的系数矩阵秩至多为一。
2. 对三维 $V$ 写出 $\Lambda^2V$ 的基，并计算一个对角算子在该基中的作用。
3. 验证 $\iota_vL_w+L_w\iota_v=B(v,w)I$，由此重证 Clifford 反交换关系。
4. 用 $X,Y$ 写出 $\mathrm{Cl}_2(\mathbb C)$ 的四个基元素对应的矩阵。
5. 在实二维正定空间令 $J=e_1e_2$，证明 $J^2=-1$，并计算 $a=\cos t+\sin t\,J$ 对向量的共轭。提示：所得旋转角为 $-2t$，符号由本讲义的 $e_i^2=+1$ 约定决定。
6. 解释特征为二时，$\Lambda V$ 的定义为什么必须包含所有 $v^2=0$，而非只包含反交换关系。
