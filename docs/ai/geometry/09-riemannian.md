# 第 9 章 Riemann 几何与几何分析

Riemann 度量把每个切空间变成内积空间，连接则负责比较不同点。两种结构相容时，距离、曲率与分析方程才形成一个统一系统。

## 9.1 度量、长度与体积 ★

Riemann 度量 $g$ 是光滑正定对称二阶协变张量。曲线长度为
$L(\gamma)=\int\sqrt{g(\dot\gamma,\dot\gamma)}\,dt$，距离为连接两点的分段光滑曲线长度下确界。它诱导原有流形拓扑。

体积测度统一记为 $\operatorname{vol}_g$，局部表达为

$$
d\operatorname{vol}_g=\sqrt{\det(g_{ij})}\,dm_n.
$$

在定向流形上同一表达给出体积形式；非定向流形仍有体积密度与测度。

## 9.2 Levi–Civita 连接的存在唯一性 ★

> 每个 Riemann 度量存在唯一无挠且保持度量的连接。

保持度量要求
$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$。
把 $X,Y,Z$ 循环置换后适当加减，再用无挠条件，得到 Koszul 公式

$$
\begin{aligned}
2g(\nabla_XY,Z)={}&Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)\\
&-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y]).
\end{aligned}
$$

右边对 $Z$ 为函数线性，非退化性唯一确定 $\nabla_XY$，证明唯一性。反过来用公式定义 $\nabla$，逐项检查对 $X$ 的函数线性、对 $Y$ 的 Leibniz 律，以及相减和相加分别给出的无挠与度量相容条件，便证明存在。坐标下得到

$$
\Gamma^k_{ij}=\tfrac12g^{k\ell}
(\partial_i g_{j\ell}+\partial_j g_{i\ell}-\partial_\ell g_{ij}).
$$

## 9.3 截面曲率、Ricci 与标量曲率 ★

沿用第 8 章的 $R$，规定

$$
K(u,v)=\frac{g(R(u,v)v,u)}{g(u,u)g(v,v)-g(u,v)^2}.
$$

于是单位球面曲率为 $+1$，双曲模型为 $-1$。常曲率 $c$ 的曲率张量为
$R(X,Y)Z=c(g(Y,Z)X-g(X,Z)Y)$。
对单位正交基 $e_i$，
$\operatorname{Ric}(v,w)=\sum_i g(R(e_i,v)w,e_i)$，
标量曲率为其迹。常曲率模型有 $\operatorname{Ric}=(n-1)c\,g$、$\operatorname{Scal}=n(n-1)c$。

## 9.4 指数映射与局部最短性

令 $\gamma_v$ 为初始位置 $p$、初始速度 $v$ 的测地线。在它能延伸到时刻 $1$ 的范围内，定义 $\exp_p(v)=\gamma_v(1)$。指数映射在零向量处的微分为恒等，故给出正规坐标。Gauss 引理说径向方向与等半径方向正交。

证明取径向测地线变分 $F(t,s)=\exp_p(tv(s))$，记 $T=\partial_tF,J=\partial_sF$。无挠给出 $\nabla_TJ=\nabla_JT$，故
$\partial_t g(T,J)=\frac12\partial_s g(T,T)$。
若 $|v(s)|$ 恒定，右边为零，而 $J(0)=0$，所以 $g(T,J)=0$。任意曲线在正规球内的长度至少为径向坐标的总变化，因此从中心出发的径向测地线在足够小球内最短。

## 9.5 Jacobi 方程

对测地线变分，将 $\nabla_TT=0$ 对 $s$ 求导，使用曲率定义与 $[T,J]=0$，得到

$$
\nabla_T^2J+R(J,T)T=0.
$$

垂直于单位速测地线时，常曲率模型化为 $J''+cJ=0$。球面解为正弦，出现共轭点；Euclidean 解为线性；双曲解为双曲正弦，体现测地线分离。这个符号检验同时检查了曲率与 Jacobi 方程的相容性。

## 9.6 完备性与 Hopf–Rinow ※

> 对连通、有限维 Riemann 流形，距离完备、所有测地线可延伸至全实轴、闭有界集紧是等价的；这些条件下任意两点之间存在最短测地线。

紧流形自动满足这些条件。定理的关键是正规球的局部最短性与从初始方向不断延伸的紧性论证；它并不是任意度量空间的结论。开单位球的 Euclidean 度量不完备，而 Poincaré 球度量把边界推到无限距离。

## 9.7 比较定理 ○

Jacobi 场的二阶方程经比较给出 Rauch 与体积比较定理。两个重要后果是：

* 若 $n\ge2$、流形完备且 $\operatorname{Ric}\ge(n-1)k\,g$，$k>0$，则直径至多 $\pi/\sqrt k$，且流形紧，基本群有限。这是 Bonnet–Myers 定理。
* 完备、连通、单连通且 $K\le0$ 的流形，其 $\exp_p:T_pM\to M$ 是全局微分同胚。这是 Cartan–Hadamard 定理。

前者使用 Ricci 下界，后者使用截面曲率上界；二者不能互换。证明需第二变分的指标形式，本节明确作为比较理论的输入。

## 9.8 Laplace 算子与 Hodge 定理 ★

对实值光滑函数 $f$，函数 Laplace 算子的约定为 $\Delta_g=\operatorname{div}_g\operatorname{grad}_g$，因此紧无边界时
$\int f\Delta_g f\,d\operatorname{vol}_g=-\int|df|^2\,d\operatorname{vol}_g$。
以下设 $M$ 是定向 $n$ 维 Riemann 流形。Hodge 星算子将 $k$ 形式变为 $(n-k)$ 形式，满足
$\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\,d\operatorname{vol}_g$，
$*_g^2=(-1)^{k(n-k)}$。
复形式时使用 $\alpha\wedge *_g\overline\beta$，内积对第一变量线性。

形式的非负算子为

$$
\Delta_{\mathrm H}=dd^\dagger+d^\dagger d,\qquad
d^\dagger|_{\Omega^k}=(-1)^{n(k+1)+1}*_g d *_g.
$$

在函数上 $\Delta_{\mathrm H}=-\Delta_g$。紧、定向、无边界时，椭圆理论给出如下正交分解，其中 $\mathcal H^k=\ker\Delta_{\mathrm H}$ 是调和 $k$ 形式空间，正交性与范数均相对于 $L^2$ 内积：
$\Omega^k=\mathcal H^k\oplus\operatorname{im}d\oplus\operatorname{im}d^\dagger$。
故每个 de Rham 类有唯一调和代表。具体地，闭形式分解为 $\alpha=h+d\beta+d^\dagger\eta$ 后，$dd^\dagger\eta=0$；分部积分给 $\|d^\dagger\eta\|^2=\langle\eta,dd^\dagger\eta\rangle=0$，所以只剩调和部分与恰当部分。若调和形式恰当，分部积分同样使其范数为零，得到唯一性。分解定理本身需要椭圆估计，不能由这段代数论证独立推出。

## 9.9 谱、极限与非光滑曲率 ☆

紧无边界流形上 $-\Delta_g$ 有离散非负谱。若流形连通，首个正特征值是 Rayleigh 商 $\int_M|df|^2\,d\operatorname{vol}_g/\int_M|f|^2\,d\operatorname{vol}_g$ 在非零、均值为零的光滑函数中取下确界的结果。均值条件排除了特征值为零的常数函数。谱一般不能唯一确定流形。

Gromov–Hausdorff 距离比较紧度量空间的形状；极限可能失去光滑结构。Alexandrov 空间用三角形比较描述曲率下界，CAT$(\kappa)$ 描述相应的上界型比较；这两种条件不是同义词。几何测度论则用可整流集与流研究带奇点的面积极小对象。

## 9.10 几何流与极小曲面 ☆

Ricci 流约定为 $\partial_tg=-2\operatorname{Ric}$。圆球度量 $g(t)=a(t)g_{S^n}$ 满足 $a'=-2(n-1)$，所以正曲率球在有限时间收缩。平均曲率流则移动嵌入而不是内在度量。

极小子流形的平均曲率向量为零，是面积泛函的驻点；驻点未必为全局最小值。研究流的长期行为需要奇点分析，这也是几何与偏微分方程相互作用的主要入口。

## 练习

1. 从 Koszul 公式推导坐标 Christoffel 符号。
2. 验证二维常曲率曲面的标量曲率为 $2K$。
3. 在单位圆上计算 $-\Delta_g$ 的特征函数与特征值。
4. 比较去掉一点的平面与 Poincaré 圆盘的完备性。
