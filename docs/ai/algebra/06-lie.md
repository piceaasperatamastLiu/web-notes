# 第 6 章 李代数及其表示 ★

有限群的对称可以逐个枚举，旋转群却有连续无穷多个元素。对连续对称，可以先研究单位元附近的运动，再用导数记录它们。两个运动交换次序的二阶差别给出李括号，于是一个非线性群的问题有了线性入口。

6.1–6.3 使用多元微分中的切向量与导数；从 6.4 起，李代数本身可独立作为代数对象学习。结构与最高权部分固定有限维复半单李代数。一般李群的全局理论与半单结构定理有超出本讲义的证明依赖，所在节会明示借用。

## 6.1 矩阵群与经典群

$\mathrm{GL}_n(\mathbb R)$ 是行列式非零的实矩阵，$\mathrm{SL}_n$ 增加行列式为一的条件。正交群满足 $A^{\mathsf T}A=I$，酉群满足 $A^\dagger A=I$，辛群满足 $A^{\mathsf T}JA=J$，其中 $J$ 为非退化交替型矩阵。

这些条件表达保持不同的几何量：体积、长度、Hermitian 内积、辛形式。注意 $\mathrm{SO}(n)$ 还要求行列式为一，而 $\mathrm O(n)$ 有两个连通分支。复矩阵群作为实流形与作为复流形时维数不同，讨论前应明确底域。

## 6.2 李群初步 ○

> 李群是同时为有限维光滑流形的群，其乘法和逆映射光滑。

一般闭矩阵子群是李群，这是闭子群定理，本节借用。对经典群，也可直接对定义方程求导并用隐函数定理构造局部坐标。

李群同态在单位元的导数给出李代数同态；局部信息不能自动确定全局拓扑。圆群和实数加法群的李代数都一维交换，但它们并不同构。

## 6.3 切空间与李代数

矩阵群单位元处的切向量可写为曲线 $\gamma(0)=I$ 的导数 $X=\gamma'(0)$。对约束求导，分别得到

$$
\mathfrak{sl}_n=\{X:\operatorname{tr}X=0\},\quad
\mathfrak{so}_n=\{X:X^{\mathsf T}+X=0\},\quad
\mathfrak u_n=\{X:X^\dagger+X=0\}.
$$

辛条件给出 $X^{\mathsf T}J+JX=0$。例如 $\det(I+tX)=1+t\operatorname{tr}X+O(t^2)$，故特殊线性群对应迹零条件。

曲线的群交换子满足

$$
e^{tX}e^{sY}e^{-tX}e^{-sY}
=I+ts(XY-YX)+O(|t|^2|s|+|t||s|^2).
$$

展开指数乘积即可看到，首阶项相消，混合二阶项保留交换子。李括号因此记录两次无穷小运动不交换的程度。

## 6.4 李代数定义与例子

> 李代数是向量空间 $\mathfrak g$ 连同双线性括号，满足 $[x,x]=0$ 和 Jacobi 恒等式
> $$
> [x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0.
> $$

在特征零，交替性等价于反对称性。结合代数的交换子自动满足 Jacobi：展开十二项，两两消去。因而矩阵迹零空间、斜对称空间都给出李代数。

另一个例子是代数的导子：$D(ab)=D(a)b+aD(b)$。两个导子的交换子仍是导子，逐项展开乘积法则即可验证。向量场的括号属于这一例子。

## 6.5 李括号与结构常数

选基 $x_i$，写 $[x_i,x_j]=\sum_k c_{ij}^{k}x_k$。反对称性给出 $c_{ij}^{k}=-c_{ji}^{k}$，Jacobi 则给出关于这些常数的二次方程。结构常数依赖基，而是否为交换、可解或半单不依赖基。

最重要的三维模型是 $\mathfrak{sl}_2(\mathbb C)$：

$$
e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad
f=\begin{pmatrix}0&0\\1&0\end{pmatrix},\quad
h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},
\qquad [h,e]=2e,\ [h,f]=-2f,\ [e,f]=h.
$$

这三条关系将控制整个有限维表示分类。

## 6.6 李群与李代数的对应 ○

矩阵群同态微分后保持括号。对连通李群，同态由其单位元处微分至多唯一确定，因为指数映射覆盖单位元的一个邻域，而连通群由任何单位邻域生成。

反向从李代数同态积分成群同态，需要定义域群单连通。存在唯一的连通单连通李群对应每个实有限维李代数，是一般李理论的存在定理，本节借用。

同一个李代数可对应不同群，例如 $\operatorname{SU}(2)$ 与 $\operatorname{SO}(3)$。李代数表示积分到单连通群后，是否下降到一个商群，要检验商掉的离散中心是否作用为恒等。这是“整数权”和全局群形式之间联系的来源。

## 6.7 指数映射与对数映射

矩阵指数 $\exp X=\sum_{r\ge0}X^r/r!$ 绝对收敛，且 $\exp(tX)$ 为一参数子群。若 $\|A-I\|<1$，矩阵对数级数 $\log A=\sum_{r\ge1}(-1)^{r+1}(A-I)^r/r$ 收敛，在足够小的邻域与指数互逆。

指数在零处的导数为恒等，所以由逆函数定理局部可逆；不意味着全局单射或满射。若 $X,Y$ 交换，$\exp(X+Y)=\exp X\exp Y$，可用级数二项式证明。不交换时要使用 BCH 展开：

$$
\log(e^Xe^Y)=X+Y+\tfrac12[X,Y]+\text{更高次交换子项}.
$$

本节只使用收敛邻域内的前几项，不把形式级数当作任意大矩阵上的公式。

## 6.8 伴随表示

李代数的伴随作用为 $\operatorname{ad}x(y)=[x,y]$。Jacobi 恰好说明 $[\operatorname{ad}x,\operatorname{ad}y]=\operatorname{ad}[x,y]$，因此它是表示。

矩阵群的伴随作用为 $\operatorname{Ad}(g)X=gXg^{-1}$，微分得到 $\operatorname{ad}$。对固定 $X$，解线性微分方程可得

$$
\operatorname{Ad}(e^X)=e^{\operatorname{ad}X}.
$$

其中核分别反映群的中心和李代数的中心。群的离散中心在微分后可能消失，这再次说明微分会丢失全局信息。

## 6.9 可解李代数与幂零李代数

李代数的导出列与下中心列按括号定义，终止分别称可解、幂零。上三角矩阵李代数可解，严格上三角矩阵李代数幂零；迹零矩阵李代数在 $n\ge2$ 时不是可解。

> Lie 定理：复可解李代数在非零有限维表示中存在共同特征向量，因此可以同时上三角化。

给出关键证明。对 $\dim\mathfrak g$ 归纳；$\mathfrak g=0$ 时任意非零向量都满足要求。若 $\mathfrak g\ne0$，可解性保证 $[\mathfrak g,\mathfrak g]\ne\mathfrak g$，因此可以选包含 $[\mathfrak g,\mathfrak g]$ 的余维一理想 $\mathfrak a$，写 $\mathfrak g=\mathfrak a+\mathbb Cx$。归纳得非零 $v$ 满足 $av=\lambda(a)v$。令 $v_j=x^jv$。由于表示空间有限维，存在最小的 $m\ge1$，使 $v_0,\ldots,v_m$ 线性相关。令 $U=\operatorname{span}(v_0,\ldots,v_{m-1})$；最小性保证这些向量构成 $U$ 的一组基，并且 $xU\subseteq U$。利用 $[a,x]\in\mathfrak a$ 归纳可得

$$
av_j-\lambda(a)v_j\in\operatorname{span}(v_0,\ldots,v_{j-1}).
$$

$U$ 对 $\mathfrak a$ 与 $x$ 都不变，$a$ 作为 $U$ 上线性算子的迹为 $\dim U\,\lambda(a)$。交换子迹为零，因此 $\lambda([x,a])=0$。共同特征空间 $E=\{w:aw=\lambda(a)w\ \forall a\in\mathfrak a\}$ 非零，且
$a(xw)=x(aw)+[a,x]w=\lambda(a)xw$，所以 $x$ 保持 $E$。在 $E$ 内取 $x$ 的特征向量即为全体的共同特征向量。再对商空间归纳得到上三角基。这里特征零和代数闭性都实际参与了证明。

Engel 定理说：若所有 $\operatorname{ad}x$ 幂零，则李代数幂零。它涉及共同零向量引理，附录 A 给出证明，勿把“可上三角化”与“严格上三角化”混同。

## 6.10 半单李代数初步

所有可解理想的和仍可解：两个可解理想的和对其中一个取商，是另一个的可解商，扩张仍可解；有限维使任意和化为有限和。最大可解理想称根基 $\operatorname{rad}\mathfrak g$。

> $\operatorname{rad}\mathfrak g=0$ 时称半单。非交换且没有非平凡理想时称单。

在复特征零有限维情形，半单李代数是单理想的直和。这是后续结构定理的一部分。$\mathfrak{sl}_n(\mathbb C)$ 为单李代数，$\mathfrak{gl}_n$ 因标量中心而非半单。

## 6.11 Killing 型

定义 $K(x,y)=\operatorname{tr}(\operatorname{ad}x\,\operatorname{ad}y)$。迹的循环性给出对称性及不变性

$$
K([x,y],z)=K(x,[y,z]).
$$

由不变性，Killing 型的零化子 $R=\{x\in\mathfrak g:K(x,y)=0\text{ 对所有 }y\in\mathfrak g\}$ 是理想。这里的零化子与后面由 Cartan 子代数定义的根空间是不同的概念。对 $\mathfrak{sl}_2$，直接在 $e,h,f$ 基中计算得 $K(h,h)=8$、$K(e,f)=4$，其他未由对称性得到的项为零，所以非退化。

$\mathfrak{sl}_n$ 上 $K(X,Y)=2n\operatorname{tr}(XY)$。可以先在 $\operatorname{End}(\mathbb C^n)$ 上将 $\operatorname{ad}X=L_X-R_X$ 展开取迹，再去掉作用为零的标量子空间。Killing 型不是任意选定的内积，复数域上也不涉及共轭。

## 6.12 Cartan 判据 ※

> 复有限维李代数可解，当且仅当 $K(\mathfrak g,[\mathfrak g,\mathfrak g])=0$；半单，当且仅当 Killing 型非退化。

可解方向可由 Lie 定理看出：伴随矩阵同时上三角，导出代数对应严格上三角，乘积迹为零。逆方向是 Cartan 的迹判据，需将矩阵的半单部分与迹配对，再用 Engel 定理，本节借用该方向，不以一行“由迹为零”代替证明。

半单判据可由可解判据进一步推出。先设 $\mathfrak g$ 半单。若 Killing 型的零化子 $R\ne0$，对 $x,y\in R$，$\operatorname{ad}x$ 在 $\mathfrak g/R$ 上为零，故限制到 $R$ 的 Killing 型也为零，可解判据使 $R$ 成为非零可解理想，与半单性矛盾。反过来，若 $\mathfrak g$ 不是半单的，便有非零可解理想；取其导出列最后一个非零项 $A$，它是交换理想；对 $a\in A$，$\operatorname{ad}a$ 把 $\mathfrak g$ 送到 $A$ 且在 $A$ 上为零，所以 $\operatorname{ad}a\,\operatorname{ad}x$ 迹为零，对任意 $x$ 成立，Killing 型退化。

## 6.13 先计算 $\mathfrak{sl}_2$ 的表示 ★

李代数表示是线性映射 $\rho:\mathfrak g\to\operatorname{End}(V)$，满足 $\rho([x,y])=[\rho(x),\rho(y)]$。以下省去 $\rho$ 的记号。

在次数为 $m$ 的齐次二元多项式空间上令

$$
e=x\partial_y,\qquad f=y\partial_x,\qquad
h=x\partial_x-y\partial_y.
$$

它们满足三条 $\mathfrak{sl}_2$ 关系。基 $x^{m-j}y^j$ 的 $h$ 权为 $m-2j$，相邻基由 $e,f$ 连接，因而不可约：任意不变子空间对可对角化的 $h$ 分解成权空间，包含一条权线后会包含全部权线。记此表示为 $V_m$，维数 $m+1$。

> $\mathfrak{sl}_2(\mathbb C)$ 的每个有限维不可约表示唯一同构于某个 $V_m$，$m\in\mathbb N$。

从有限个 $h$ 特征值中选 $\lambda$，使 $\lambda+2$ 不是特征值，并取 $hv=\lambda v$。关系给出 $ev=0$。令 $v_j=f^jv$，归纳计算

$$
hv_j=(\lambda-2j)v_j,\qquad
ev_j=j(\lambda-j+1)v_{j-1}.
$$

非零的 $v_j$ 有不同权，所以有限维性使它们终止，设 $v_m\ne0$、$v_{m+1}=0$。第二式在 $j=m+1$ 给出 $(m+1)(\lambda-m)v_m=0$，故 $\lambda=m$。这些向量张成不变非零空间，不可约性使它等于全空间；与上述多项式模型按非零比例对应即得分类。注意多项式基与 $f^jv$ 基归一化不同，系数不能混用。

## 6.14 复半单李代数的结构入口 ※

后面的理论使用复半单结构定理：存在由可交换、伴随作用可对角化元素组成的 Cartan 子代数 $\mathfrak h$，并有根分解

$$
\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha,
\qquad
\mathfrak g_\alpha=\{x:[h,x]=\alpha(h)x\ \forall h\in\mathfrak h\}.
$$

各根空间一维；每个根与负根生成一个 $\mathfrak{sl}_2$；根形成有限约化根系。一般存在性、根空间维数与 Cartan 子代数共轭性在此借用。下面会完整计算 $\mathfrak{sl}_n$ 的模型，并在这些结构事实之上证明最高权分类。这样区分“基础结构输入”和“由它推导的表示结果”。

## 6.15 Cartan 子代数

对 $\mathfrak{sl}_n$，取迹零对角矩阵组成的 $\mathfrak h$，其维数为 $n-1$，称秩。记 $\varepsilon_i(H)=H_{ii}$，则

$$
[H,E_{ij}]=(\varepsilon_i-\varepsilon_j)(H)E_{ij}.
$$

因此根是 $\varepsilon_i-\varepsilon_j$，$i\ne j$。对角空间是零权空间，非对角矩阵单位是各根空间的基，直接验证结构分解。一般李代数中的 Cartan 子代数还可以定义为自正规化的幂零子代数；半单复情形与本节的极大环面描述一致，不能把这一定义直接套到所有可解李代数。

## 6.16 根系

对根 $\alpha$，选归一化的根 $\mathfrak{sl}_2$ 三元组 $e_\alpha,f_\alpha,h_\alpha$，使 $[e_\alpha,f_\alpha]=h_\alpha$、$\alpha(h_\alpha)=2$。余根 $\alpha^\vee$ 表示这个 Cartan 元素 $h_\alpha$；权与余根的配对是求值 $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)$，不是 Hermitian 内积。

把根放在其张成的实欧氏空间中。反射为

$$
s_\alpha(\beta)=\beta-\langle\beta,\alpha^\vee\rangle\alpha,
\qquad
\langle\beta,\alpha^\vee\rangle=\frac{2(\beta,\alpha)}{(\alpha,\alpha)}.
$$

根串来自根 $\mathfrak{sl}_2$ 的伴随表示，因此这些配对是整数。选正根后，不能进一步写成正根之和的根为简单根；它们构成根格的基，每个正根是简单根的非负整数和。这些是 6.14 结构定理包含的根系事实。

对简单根 $\alpha_i$，缩写 $e_i=e_{\alpha_i}$、$f_i=f_{\alpha_i}$、$h_i=h_{\alpha_i}$。后文的整性条件 $\lambda(h_i)\in\mathbb N$ 和基本权定义使用的都是这些余根元素。

Cartan 矩阵统一取 $a_{ij}=\alpha_j(h_i)=\langle\alpha_j,\alpha_i^\vee\rangle$；第 6.28 节的 $[h_i,e_j]=a_{ij}e_j$ 使用同一指标次序。

对 $\mathfrak{sl}_3$ 可取 $\alpha_1=\varepsilon_1-\varepsilon_2$、$\alpha_2=\varepsilon_2-\varepsilon_3$，正根为 $\alpha_1,\alpha_2,\alpha_1+\alpha_2$，根系是一个六边形。此时 Cartan 矩阵为 $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$。

## 6.17 Weyl 群

由根反射生成的有限群称 Weyl 群 $W$。$\mathfrak{sl}_n$ 的反射交换两个 $\varepsilon_i$，因此 $W\cong S_n$。它与原来的矩阵李群不是同一个群，而是控制 Cartan 上对称的有限群。

对每个简单根的 $\mathfrak{sl}_2$，算子 $\exp(e_i)\exp(-f_i)\exp(e_i)$ 在有限维表示上实现对应反射对权的作用。可在二维标准表示中先算，再利用括号关系验证其共轭作用；指数因 $e_i,f_i$ 幂零而是有限和。因此权的重数在 Weyl 群作用下不变。

## 6.18 权与权空间

对表示 $V$，若 $hv=\lambda(h)v$ 对全部 $h\in\mathfrak h$ 成立，称 $v$ 为权 $\lambda$ 的向量，所有这种向量组成 $V_\lambda$。有限维半单表示中 $\mathfrak h$ 同时可对角化，于是 $V=\bigoplus_\lambda V_\lambda$。

此处的可对角化也可由各简单根 $\mathfrak{sl}_2$ 推出：它们的 $h_i$ 在有限维表示中可对角化，彼此交换且生成 $\mathfrak h$。单个 $\mathfrak{sl}_2$ 表示的完全可约性在 6.24 独立证明；一般完全可约性也在那里讨论。

根算子满足 $\mathfrak g_\alpha V_\lambda\subseteq V_{\lambda+\alpha}$，因为
$h(xv)=x(hv)+[h,x]v$。根是伴随表示的非零权，普通表示的权不必是根。$\mathfrak{sl}_3$ 标准表示的权是 $\varepsilon_1,\varepsilon_2,\varepsilon_3$。

## 6.19 最高权表示

取正根子代数 $\mathfrak n_+$ 与负根子代数 $\mathfrak n_-$。一个权向量 $v$ 若被全部正根算子消去，称最高权向量。有限权集中取一个在正根方向不能再上升的权，就会得到最高权向量。

对不可约表示，该向量生成全空间。最高权 $\lambda$ 必满足 $\lambda(h_i)\in\mathbb N$，因为限制到每个简单根的 $\mathfrak{sl}_2$，最高权串的终止计算与 6.13 相同。满足这些整数条件的权称支配整权。如何证明每个这样的权确实产生一个有限维表示，需要先建立包络代数。

## 6.20 普遍包络代数与 PBW 定理 ※

定义

$$
U(\mathfrak g)=T(\mathfrak g)/(x\otimes y-y\otimes x-[x,y]).
$$

李代数表示唯一延伸为 $U(\mathfrak g)$-模，因为算子交换子恰好满足这些关系。

> PBW 定理：选有序基 $x_1,\ldots,x_n$，则 $x_1^{a_1}\cdots x_n^{a_n}$，$a_i\ge0$，为 $U(\mathfrak g)$ 的基。

给出排序证明。把逆序对 $x_jx_i$（$j>i$）替换成 $x_ix_j+[x_j,x_i]$。第一项长度不变但逆序数下降，括号项长度下降，因此按“长度优先、逆序数其次”排序，过程终止。

唯一性要检查不同消去顺序。互不重叠的两个逆序对可以任意次序替换，结果相同。唯一重叠是三个严格递减字母 $zyx$：先处理左对或右对，整理差值后得到

$$
[[z,y],x]+[y,[z,x]]+[[y,x],z]=0,
$$

正是 Jacobi 恒等式。括号项长度更小，已可归纳使用唯一约化。由终止性，对最早分叉的两条约化路径作归纳，局部可合流推出最终标准式唯一。每条关系在任意上下文中的两边因此具有同一标准式，约化映射消去定义理想；它在有序词上为恒等，所以有序词在商中线性无关。生成性先前已得，证明完成。

按负根、Cartan、正根次序取基，得到向量空间分解 $U(\mathfrak g)\cong U(\mathfrak n_-)\otimes U(\mathfrak h)\otimes U(\mathfrak n_+)$。这不是宣称三个代数在乘法上彼此交换。

## 6.21 $\mathfrak{sl}_3$ 表示论初步

标准表示为 $\mathbb C^3$，其对偶是另一种三维表示；二者最高权分别为基本权 $\omega_1,\omega_2$，定义为 $\omega_i(h_j)=\delta_{ij}$。

伴随表示维数八，其权为六个根，加零权重数二。标准表示张量对偶分解为

$$
\mathbb C^3\otimes(\mathbb C^3)^*
\cong\operatorname{End}(\mathbb C^3)
=\mathbb CI\oplus\mathfrak{sl}_3.
$$

群作用是共轭，李代数作用是交换子，因此标量部分平凡，迹零部分伴随。记 $\mathbf3=\mathbb C^3$ 为标准表示，$\mathbf6=S^2\mathbf3$、$\mathbf8=\mathfrak{sl}_3$，$\mathbf1$ 为平凡表示；粗体数字在这里表示模，而不是普通整数。另一例子是 $\mathbf3\otimes\mathbf3=S^2\mathbf3\oplus\Lambda^2\mathbf3$，维数为 $6+3$；体积型使 $\Lambda^2\mathbf3\cong\mathbf3^*$，但需要特殊线性群条件。

## 6.22 最高权定理 ★ ※

> 有限维复半单李代数的不可约表示，在同构意义下与支配整权一一对应。

以下证明使用 6.14 中明示借用的根结构事实，并使用刚证明的 PBW 定理。对任意权 $\lambda$，构造 Verma 模

$$
M_\lambda=U(\mathfrak g)\otimes_{U(\mathfrak h+\mathfrak n_+)}
\mathbb C_\lambda,
$$

其中 $\mathfrak n_+$ 作用为零，$h$ 作用为 $\lambda(h)$。PBW 说明它以负根有序词作用在 $v_\lambda$ 上为基；最高权空间一维，其余权形如 $\lambda-\sum_i n_i\alpha_i$。各权空间有限维，因为只有有限种负根，固定简单根总次数的词只有有限种。

任何真子模不含最高权空间，否则包含生成元而等于全模。子模按权分解，因为一个向量只有有限多个权分量，可用 Cartan 算子的插值多项式分别提取。因此所有真子模之和仍不含最高权空间，是唯一极大真子模。其商 $L_\lambda$ 唯一不可约；任何由最高权 $\lambda$ 向量生成的不可约模都是这一商。这证明唯一性。

当 $\lambda_i=\lambda(h_i)\in\mathbb N$，把 $M_\lambda$ 再商掉各向量 $f_i^{\lambda_i+1}v_\lambda$ 生成的子模，得 $Q_\lambda$。这些向量被全部 $e_j$ 消去：$j=i$ 用 6.13 的系数公式，$j\ne i$ 用 $[e_j,f_i]=0$。它们生成的子模全部权严格低于 $\lambda$，故 $Q_\lambda\ne0$。

在 $Q_\lambda$ 上，每个 $e_i,f_i$ 都局部幂零。对任意 $u\in U(\mathfrak g)$，$\operatorname{ad}e_i$、$\operatorname{ad}f_i$ 在 $u$ 上局部幂零：在 $\mathfrak g$ 的根串上成立，再由导子乘积法则延伸到有限词。结合 $e_iv_\lambda=0$ 与 $f_i^{\lambda_i+1}v_\lambda=0$，展开
$x^Nu=\sum_{r=0}^N\binom Nr(\operatorname{ad}x)^r(u)x^{N-r}$，足够大 $N$ 时每项作用在 $v_\lambda$ 上为零。

因此简单根的指数反射在该模上仍有意义，权集 Weyl 不变。取把全部正根送到负根的最长元素 $w_0$。所有权既在 $\lambda-Q_+$，又在 $w_0\lambda+Q_+$，其中 $Q_+$ 为简单根的非负整数锥。若 $\mu=\lambda-\sum n_i\alpha_i=w_0\lambda+\sum m_i\alpha_i$，则
$\lambda-w_0\lambda=\sum(n_i+m_i)\alpha_i$，每个 $n_i,m_i$ 都有界。故只有有限多个权，各权空间有限维，$Q_\lambda$ 有限维，其不可约商 $L_\lambda$ 也有限维。这证明存在性。

最后，任意有限维不可约模都有最高权，简单根 $\mathfrak{sl}_2$ 串证明其支配整性，且由该最高权向量生成。所以以上构造涵盖全部不可约，定理得证。

## 6.23 Weyl 特征公式初步 ※

令 $\rho=\frac12\sum_{\alpha>0}\alpha$，用形式符号 $e^\mu$ 记录权，特征标为 $\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^\mu$。Weyl 特征公式为

$$
\operatorname{ch}L_\lambda
=\frac{\sum_{w\in W}\det(w)e^{w(\lambda+\rho)}}
{\sum_{w\in W}\det(w)e^{w\rho}},
\qquad
\sum_w\det(w)e^{w\rho}
=e^\rho\prod_{\alpha>0}(1-e^{-\alpha}).
$$

这里分式最终等于有限形式和，不是选择一个数值点后任意作除法。一般公式的证明还需 Weyl 分母恒等式及特征标的消去论证，本节借用，不以最高权分类代替其证明。

在 $\mathfrak{sl}_2$ 中令 $t=e^\omega$，$\alpha=2\omega$、$\rho=\omega$，公式成为

$$
\frac{t^{m+1}-t^{-(m+1)}}{t-t^{-1}}
=t^m+t^{m-2}+\cdots+t^{-m},
$$

有限等比级数立即证明这一特例，和 6.13 的权串一致。对一般根系，取指数趋近单位元可得维数公式

$$
\dim L_\lambda=
\prod_{\alpha>0}\frac{\langle\lambda+\rho,\alpha^\vee\rangle}
{\langle\rho,\alpha^\vee\rangle}.
$$

$\mathfrak{sl}_3$ 的 $\lambda=a\omega_1+b\omega_2$ 得维数 $(a+1)(b+1)(a+b+2)/2$。这是使用上述借用公式的计算结果。

## 6.24 完全可约性与典型表示

> Weyl 完全可约定理：有限维复半单李代数的有限维表示是不可约表示的直和。

给出紧群方法的证明及其输入。借用半单复李代数存在紧实形式 $\mathfrak k$，$\mathfrak g=\mathfrak k\otimes_{\mathbb R}\mathbb C$，且对应单连通紧李群 $K$；再借用李代数表示的积分定理与紧群归一化 Haar 测度。把表示积分到 $K$，平均一个正定 Hermitian 内积：

$$
\langle v,w\rangle_K=\int_K\langle kv,kw\rangle_0\,dk.
$$

这里 $dk$ 简写 $dm_K(k)$，$m_K$ 是满足 $m_K(K)=1$ 的 Haar 测度，与有限群 Fourier 章使用的计数测度 $m_G$ 区分。

它正定且 $K$-不变。任意 $\mathfrak g$-不变子空间也对积分群不变，正交补对 $K$、$\mathfrak k$ 及其复化 $\mathfrak g$ 不变。因此每个子表示有不变补，按维数归纳完成。这个证明完整解释平均步骤，但紧实形式和积分定理的建立属于借用的李群结构输入。

对 $\mathfrak{sl}_2$，输入可直接验证：$\mathfrak{su}_2$ 的复化为 $\mathfrak{sl}_2$，$\operatorname{SU}(2)$ 同胚于单位四元数的 $S^3$，紧且单连通。因此这一路线独立证明 $\mathfrak{sl}_2$ 的完全可约性，没有使用最高权分类来假定分解。

典型表示包括标准表示、对偶、伴随、对称幂和外幂。$\mathfrak{sl}_n$ 的 $\Lambda^r\mathbb C^n$ 最高权为 $\omega_r$，对称幂最高权为 $m\omega_1$。正交李代数还有旋量表示，其来源见第 4–5 章。

## 6.25 Clebsch–Gordan 分解 ★

> 对 $\mathfrak{sl}_2$，
> $$
> V_m\otimes V_n\cong
> \bigoplus_{r=0}^{\min(m,n)}V_{m+n-2r}.
> $$

设 $m\le n$。两边特征标分别为两个权串的乘积，以及最高权为 $m+n,m+n-2,\ldots,n-m$ 的权串之和。权 $m+n-2s$ 在左边的重数是满足 $i+j=s$、$0\le i\le m$、$0\le j\le n$ 的整数对个数，即

$$
\min(m,s)-\max(0,s-n)+1
$$

（范围外记零）。右边该权的重数是满足 $0\le r\le m$、$r\le s\le m+n-r$ 的整数 $r$ 个数；逐段比较 $s\le m$、$m\le s\le n$、$n\le s\le m+n$，得到相同数值。因此特征标相等。

完全可约性已经独立证明，而不可约权串有不同最高权，故其特征标线性无关：取最大权项即能消去最大最高权的系数。特征标相等因而推出分解同构，证明完成。例子 $V_1\otimes V_1=V_2\oplus V_0$ 对应对称平方加外平方。

## 6.26 张量积分解初步

一般半单情形，张量积的权重数由两个权多重集卷积得到，再逐次减去最高权不可约的特征标。不可约的最高权向量张量仍是最高权向量，所以 $L_{\lambda+\mu}$ 在 $L_\lambda\otimes L_\mu$ 中出现一次。

这只能确定最高的一项，其余项还需权重数或 Weyl 公式。对 $\mathfrak{sl}_3$，$\mathbf3\otimes\mathbf3^*=\mathbf1\oplus\mathbf8$ 与 $\mathbf3\otimes\mathbf3=\mathbf6\oplus\mathbf3^*$ 已给出完整例子，记号沿用 6.21。第一遍应先练习这些低维计算，再学习 Littlewood–Richardson 规则。

## 6.27 无穷维李代数初步 ☆

Laurent 多项式向量场有基 $L_n=-z^{n+1}\partial_z$，满足 $[L_m,L_n]=(m-n)L_{m+n}$，称 Witt 代数。加上中心元素 $C$，可定义 Virasoro 括号

$$
[L_m,L_n]=(m-n)L_{m+n}
+\frac{m^3-m}{12}\delta_{m+n,0}C,\qquad [C,L_n]=0.
$$

额外项是一个 $2$-余循环，Jacobi 可直接代入核验。无穷维表示不再自动完全可约，最高权空间也不保证生成有限维模。研究它们需要拓扑、分次或能量有界等额外条件。

## 6.28 Kac–Moody 代数初步 ☆

以广义 Cartan 矩阵 $A=(a_{ij})$ 为数据，生成元 $e_i,f_i,h_i$ 满足

$$
[h_i,e_j]=a_{ij}e_j,\quad [h_i,f_j]=-a_{ij}f_j,\quad
[e_i,f_j]=\delta_{ij}h_i,\quad[h_i,h_j]=0
$$

以及 Serre 关系 $(\operatorname{ad}e_i)^{1-a_{ij}}e_j=0$、对应的 $f$ 关系（$i\ne j$）。有限型返回半单李代数；仿射型联系环路代数的中心扩张。一般定义还需补足 Cartan 空间以处理矩阵的核，本节只给出导出部分的生成关系。

## 练习

1. 从曲线约束推导 $\mathfrak{sp}_{2n}$，计算其维数 $n(2n+1)$。提示：按 $n\times n$ 块分解矩阵。
2. 验证 $\mathfrak{sl}_2$ 的 Killing 型数值，并检查不变性。
3. 证明 $V_m$ 的各权都重数一，用 $f^jv$ 基重新计算 $e,f,h$ 的矩阵。
4. 分解 $V_2\otimes V_3$。答案为 $V_5\oplus V_3\oplus V_1$，核对维数。
5. 在 $\mathfrak{sl}_3$ 标准表示中直接找到最高权向量，并写出三个权。
6. 证明 $S^2(\mathbb C^2)$ 与 $\mathfrak{sl}_2$ 的伴随表示同构。提示：最高权都是 $2$，维数都是三。
7. 对 Virasoro 中心项验证 $(m,n,r)$ 满足 $m+n+r=0$ 时的 Jacobi 系数恒等式。
