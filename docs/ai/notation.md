# 讲义的共同符号约定

现代分析学、代数学、几何与拓扑共用本页的约定。读公式时，先看对象的类型：同一个标准字母可以在不同章节表示不同对象，但同一种运算的方向、共轭和归一化应保持一致。各章局部引入的记号，只在说明的范围内使用。

## 数系、编号与阅读标记

$\mathbb N=\{0,1,2,\ldots\}$，$\mathbb N_{>0}=\{1,2,\ldots\}$。数列未另说明时从 $1$ 编号；幂级数、分次代数、同调与最高权可以从 $0$ 编号。有限域 $\mathbb F_{p^n}$ 中 $p$ 为素数、$n\geq1$。$\mathbb K$ 表示实数域或复数域；$k$ 表示一般底域，不能把实、复空间的内积结论直接推广到任意域。

**★ 重点；○ 略讲；☆ 选读；※ 证明可跳过；△ 应用。** ※ 本身不表示缺少证明；借用定理或只给证明纲要时，正文另外说明。

映射从右向左复合：$ST=S\circ T$，先作用 $T$。向量坐标写成列；换基矩阵的列是新基在旧基下的坐标。$\ker T$ 和 $\operatorname{im}T$ 分别表示核和像。

<a id="measure"></a>

## 测度与积分

测度的名称由对象决定，定义以后沿用；不因章节转换而给同一个测度换名。

| 对象 | 全文使用的记号 | 积分与空间 |
| --- | --- | --- |
| 一般测度空间 | $(X,\Sigma,\mu)$；第二测度 $\nu$ | $\int_X f\,d\mu$，$L^p(X,\Sigma,\mu)$ |
| Euclidean Lebesgue 测度 | $m_n$，可测集合族 $\mathcal L_n$，外测度 $m_n^*$ | $dx=dm_n(x)$；一维为 $m_1$ |
| 乘积测度 | $\mu\otimes\nu$ | 在 $\Sigma\otimes\mathcal T$ 上定义，再按需要完备化 |
| Stieltjes 测度 | $\nu_F((s,t])=F(t)-F(s)$ | $dF$ 简写 $d\nu_F$；非减 $F$ 给正测度，BV 情形给符号测度 |
| 概率测度 | $(\Omega,\mathcal F,\mathbb P)$ | $\mathbb E X=\int_\Omega X\,d\mathbb P$ |
| 随机变量的分布 | $\mu_X$ | $\mu_X(A)=\mathbb P(X\in A)$，$\mathbb E\phi(X)=\int\phi\,d\mu_X$ |
| 圆群的 Haar 测度 | $m_{\mathbb T}$ | $m_{\mathbb T}(\mathbb T)=1$，在 $[0,1)$ 上使用 $m_1$ |
| 有限群计数测度 | $m_G$ | $m_G(A)=|A|$，积分为求和 |
| 紧群归一化 Haar 测度 | $m_K$ | $m_K(K)=1$，$dk$ 简写 $dm_K(k)$ |
| Riemann 体积测度 | $\operatorname{vol}_g$ | $d\operatorname{vol}_g=\sqrt{\det(g_{ij})}\,dm_n(x)$ |

例如 $m_n(E)$ 是 Euclidean 集合的体积，$\mu(E)$ 是一般空间上的测度；只有明确取 $\mu=m_n$ 后，两者才是同一对象。样本空间上的 $\mathbb P$ 与状态空间上的分布 $\mu_X$ 也不互换。

同一段证明固定测度后，可以省略积分末尾的 $d\mu$；转入另一个空间时会说明新测度。$\int f(x)dx$、$\int f(t)dt$ 是对 Lebesgue 测度的积分。微分形式中的 $dx^j$ 是余向量，$\int_M\omega$ 是形式积分；Itô 积分中的 $dB_t$ 则是随机积分记号，都不能当作 $d\mu$ 的另一种写法。

$L^p(X,\mu)$ 是 $L^p(X,\Sigma,\mu)$ 的简写；固定空间与测度以后才简写 $L^p$。Euclidean $L^p(\Omega)$ 使用 $m_n$，流形 $L^p(M)$ 使用 $\operatorname{vol}_g$，概率章 $L^p(\Omega)$ 使用 $\mathbb P$。几乎处处、零测集和本性上确界也都相对于这些指定测度理解。

## 对偶、内积与伴随

代数对偶 $V^*=\operatorname{Hom}_k(V,k)$ 包含所有线性泛函。赋范空间的 $X^*$ 则只包含连续线性泛函；无限维时两者不能混同。有限维实、复空间中所有线性泛函连续，因此两种定义一致。泛函求值写成 $\ell(v)$，分布求值写成 $T(\varphi)$。

复内积对第一变量线性、第二变量共轭线性：

$$
\langle x,y\rangle=\sum_jx_j\overline{y_j}.
$$

| 操作 | 定义 | 矩阵 |
| --- | --- | --- |
| 对偶映射 $T^*:W^*\to V^*$ | $T^*\ell=\ell\circ T$ | $A^{\mathsf T}$ |
| 内积伴随 $T^\dagger:W\to V$ | $\langle Tv,w\rangle=\langle v,T^\dagger w\rangle$ | $\overline A^{\mathsf T}$，使用标准正交基 |
| Riesz 识别 $H\to H^*$ | $y\mapsto\langle\,\cdot\,,y\rangle$ | 复空间上是共轭线性的 |

例如 $Tz=iz$ 在一维复空间中有 $T^*\ell=i\ell$，而 $T^\dagger z=-iz$；二者不能只因都反转方向就混写。$C^*$-代数保留标准的对合记号 $a^*$；当元素是 Hilbert 空间上的算子时，这个对合就是内积伴随 $a^\dagger$。

双线性型 $B(x,y)$ 不取共轭，不能与 Hermitian 内积混用。$\langle\chi,\psi\rangle_G$ 是类函数的内积；根系中的 $\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)$ 是权与余根的求值。后者不是复 Hilbert 内积，根系的实 Euclidean 内积另写为 $(\lambda,\mu)$。

## 微分、外积与 Clifford 符号

Euclidean 导数写为 $DF(a)[h]$，流形微分写为 $dF_p:T_pM\to T_{F(p)}N$；标量函数的 $df$ 是 1-形式。分析学微分定理证明中的平均振荡记为 $\mathcal O f$，避免与导数 $Df$ 混同。

$k$-形式满足 $\omega_p\in\Lambda^k(T_p^*M)$。外积使用使余向量外积求值等于行列式的归一化，特别是

$$
(\alpha\wedge\beta)(u,v)
=\alpha(u)\beta(v)-\alpha(v)\beta(u).
$$

这里没有额外的 $1/2$。一般次数的公式见分析学 2.17，与代数学外代数的乘法一致。拉回 $F^*$ 在每点由 $dF_p$ 的对偶及其外幂产生；它与内积伴随无关。外微分满足 $d^2=0$，收缩把向量插入形式的第一个位置；边界使用“外法向优先”的定向。

Clifford 代数统一取 $v^2=q(v)1$，$uv+vu=2B(u,v)1$，其中 $q(v)=B(v,v)$，底域特征不为 $2$。$\mathrm{Cl}_{p,q}$ 有 $p$ 个平方为 $+1$、$q$ 个平方为 $-1$ 的标准生成元；$\mathrm{Cl}_n(\mathbb C)$ 对应 $\sum_j z_j^2$。$\mathrm{Cl}^0$ 表示偶子代数，不是只由标量组成的零次部分。群交换子取 $xyx^{-1}y^{-1}$，李括号取 $[X,Y]=XY-YX$。

## 拓扑、曲率与辛几何

一般拓扑空间不默认 Hausdorff；流形默认 Hausdorff、第二可数且有限维。$\mathbb T^n=\mathbb R^n/\mathbb Z^n$ 的坐标周期为 $1$。路径乘法 $\alpha\beta$ 表示先走 $\beta$ 再走 $\alpha$，与映射复合方向一致。

射影空间 $\mathbb P(V)$ 表示一维线性子空间。曲面的属（亏格）统一写为 $\gamma$，$g$ 留给 Riemann 度量。奇异同调 $H_n(X;A)$ 与上同调 $H^n(X;A)$ 省略系数时为整数系数；$H^q(X,\mathcal F)$ 表示层上同调。链边界、余链微分、形式外微分分别为 $\partial,\delta,d$。

曲率与截面曲率取

$$
\begin{aligned}
R(X,Y)Z&=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z,\\
K(u,v)&=\frac{g(R(u,v)v,u)}{g(u,u)g(v,v)-g(u,v)^2}.
\end{aligned}
$$

单位球面 $K=+1$；Jacobi 方程为 $\nabla_T^2J+R(J,T)T=0$。局部标架采用 $\nabla e_j=e_i\omega^i{}_j$，曲率矩阵为 $\Omega=d\omega+\omega\wedge\omega$。函数算子 $\Delta_g=\operatorname{div}_g\operatorname{grad}_g$ 与分析学的 $\Delta$ 同号；非负 Hodge 算子为 $\Delta_{\mathrm H}=dd^\dagger+d^\dagger d$，在函数上等于 $-\Delta_g$。

辛形式取 $\omega=\sum_jdq^j\wedge dp_j$，Hamilton 场满足 $\iota_{X_H}\omega=dH$。Poisson 括号取 $\{f,h\}=\omega(X_f,X_h)=X_hf$，于是 $\dot f=\{f,H\}$，且 $[X_f,X_h]=-X_{\{f,h\}}$。余切丛的典范形式为 $\lambda=p_jdq^j$，辛形式为 $-d\lambda$。复线丛 $\mathcal O(-1)$ 在 $\mathbb{CP}^1$ 上的第一 Chern 数为 $-1$，Chern–Weil 规范为 $c(E,\nabla)=\det(I+i\Omega/(2\pi))$。

## Fourier 变换与概率

分析学在 $\mathbb R^n$ 上使用

$$
\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx,\qquad
f(x)=\int\widehat f(\xi)e^{2\pi i x\cdot\xi}\,d\xi.
$$

逆变换需满足所在定理的可积性条件。圆群 $\mathbb R/\mathbb Z$ 使用总质量为 $1$ 的 Haar 测度。有限群章使用计数测度，因此逆变换带 $1/|G|$，卷积是求和。

有限群变换写为 $\widehat f(\rho)=\sum_g f(g)\rho(g)$。对循环群 $\mathbb Z/N\mathbb Z$ 选 $\rho_k([r])=e^{-2\pi ikr/N}$，便得到同一负指数约定。非交换群保留 $\rho(g)$，以保证 $\widehat{f*h}=\widehat f\,\widehat h$；不能只把它换成逆元而保持原卷积次序。

概率特征函数保留常用约定 $\varphi_X(t)=\mathbb E e^{itX}$。若 $\widehat{\mu_X}(\xi)=\int e^{-2\pi i\xi x}\,d\mu_X(x)$，则

$$
\varphi_X(t)=\widehat{\mu_X}\bigl(-t/(2\pi)\bigr).
$$

正态分布统一记为 $\mathcal N(m,\sigma^2)$；多维时第二个参数是协方差矩阵。Laplace 算子取 $\Delta=\sum_j\partial_j^2$，所以 $-\Delta$ 的 Fourier 符号为 $4\pi^2|\xi|^2$。热方程 $u_t=\Delta u$ 的核记为 $G_t$；标准 Brown 运动的生成元是 $\Delta/2$，其转移核为 $G_{t/2}$。

## 依赖语境的常用记号

| 记号 | 需要区分的对象 |
| --- | --- |
| $\Omega$ | PDE 中的开区域；概率中的样本空间 |
| $H^k(\Omega)$、$H^k_{\mathrm{dR}}(M)$、$H^k(G,M)$ | Sobolev 空间、de Rham 上同调、群上同调 |
| $\mathcal B(X)$、$\mathcal B(X,Y)$ | Borel 集族、有界线性算子空间，依章内定义区分 |
| $\|f\|_\infty$ | 连续函数空间中的上确界；$L^\infty$ 中的本性上确界 |
| $F^*$ | 形式的拉回；凸分析中另定义的 Fenchel 共轭函数 |
| $\Delta$ | 分析学的 Laplace 算子；Hopf 代数中另定义的余乘法 |

普通 Euclidean 坐标中的上下标可以只是编号；张量的指标运算中，上标表示向量分量、下标表示余向量分量，缩并才使用 Einstein 约定。跨页引用公式时，应把空间、底域和局部定义一并带上。
