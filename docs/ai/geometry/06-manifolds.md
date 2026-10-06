# 第 6 章 光滑流形与微分形式

一张地图只覆盖局部，微积分却必须在换地图以后仍表示同一个对象。本章从这一要求出发，引入切向量、微分形式与积分。

## 6.1 光滑结构与切空间 ★

流形在本讲义中满足 Hausdorff、第二可数，且维数有限。光滑图册的坐标变换为光滑映射；最大相容图册称为光滑结构。拓扑流形未必存在光滑结构，存在时也未必唯一。

点 $p$ 处的切向量可定义为经过 $p$ 的光滑曲线在一张坐标图中具有相同速度的等价类。链式法则证明这一关系不依赖图；也可定义为满足 Leibniz 律的导子 $v(fh)=v(f)h(p)+f(p)v(h)$。坐标下 $v=v^i\partial_i$，对偶基为 $dx^i$。光滑映射 $F:M\to N$ 的微分 $dF_p:T_pM\to T_{F(p)}N$ 满足链式法则。

## 6.2 秩定理、浸入与嵌入

逆函数定理说可逆微分保证局部微分同胚。常秩定理说秩恒为 $r$ 的映射在合适坐标下形如
$(x^1,\ldots,x^m)\mapsto(x^1,\ldots,x^r,0,\ldots,0)$。
证明先选一个非零 $r$ 阶子式，用逆函数定理把对应输出与剩余输入作为新坐标；恒秩条件使剩余输出不依赖后面的变量。

微分单射的映射叫浸入；兼为到其像的拓扑同胚才叫嵌入。紧流形到 Hausdorff 流形的单射浸入必为嵌入，因为紧到 Hausdorff 的连续双射具有连续逆。

## 6.3 正则值、横截与 Sard 定理 ※

若 $dF_p$ 在 $F(p)=y$ 的所有点满射，则 $y$ 是正则值，秩定理给出 $F^{-1}(y)$ 是余维 $\dim N$ 的子流形。横截条件 $dF_p(T_pM)+T_{F(p)}S=T_{F(p)}N$ 将它推广到逆像 $F^{-1}(S)$。

Sard 定理保证光滑映射的临界值集在目标坐标中的 Lebesgue 测度 $m_n$ 为零；有限可微版本需要足够高的微分阶数。其证明通过坐标分层与小立方体估计，这里作为分析工具引用。它使“选择一个正则值”成为有依据的操作，而不是泛泛地说“一般位置”。

Whitney 嵌入定理保证每个 $n$ 维光滑流形可嵌入 $\mathbb R^{2n}$（$n>0$）。证明需横截与消除双点技术，本讲义不以一句投影论证替代完整证明。

## 6.4 单位分解

局部有限的光滑单位分解是函数族 $\rho_i\ge0$，其支撑从属于给定开覆盖，且 $\sum_i\rho_i=1$。构造方法是先取局部有限的坐标球细化，再用 Euclidean 光滑截断函数 $\psi_i$，使其正值区域覆盖流形，最后令 $\rho_i=\psi_i/\sum_j\psi_j$。局部有限保证分母与和光滑。

这一步依赖流形的仿紧性。它允许拼接度量、连接与积分，却不能随意拼接“平坦连接”或“辛形式”，因为额外方程可能在拼接后失效。

## 6.5 外代数、拉回与外微分 ★

$\Omega^k(M)$ 是光滑交替 $k$ 形式的空间。沿用分析、代数讲义的外积约定：

$$
(\alpha\wedge\beta)(u,v)=\alpha(u)\beta(v)-\alpha(v)\beta(u)
$$

这里 $\alpha,\beta$ 是一阶形式，$u,v$ 是同一点处的切向量；外积公式中不加额外的 $1/2$。

设 $F:M\to N$ 是光滑映射，$\omega\in\Omega^k(N)$。要把 $\omega$ 拉回到 $M$，先用微分 $dF_p$ 将 $p$ 处的每个输入切向量映到 $F(p)$ 处，再让 $\omega_{F(p)}$ 对这些向量求值：

$$
(F^*\omega)_p(v_1,\ldots,v_k)
=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k).
$$

这样定义的 $F^*\omega$ 是 $M$ 上的 $k$ 形式。因此 $F^*:\Omega^k(N)\to\Omega^k(M)$ 的方向与 $F:M\to N$ 相反，这就是拉回的反变性。构造只使用 $dF_p$，不要求 $F$ 可逆。

坐标中若 $\alpha=\sum_I a_I\,dx^{i_1}\wedge\cdots\wedge dx^{i_k}$，定义
$d\alpha=\sum_I da_I\wedge dx^I$。这里 $I=(i_1,\ldots,i_k)$，$dx^I$ 是对应的坐标形式外积。链式法则保证定义在换坐标后相容，混合偏导的对称性则给出 $d^2=0$。对 $\alpha\in\Omega^k(M)$、$\beta\in\Omega^\ell(M)$ 与 $\omega\in\Omega^k(N)$，还有

$$
d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta,
\qquad d(F^*\omega)=F^*(d\omega).
$$

## 6.6 Poincaré 引理的证明 ★

在关于原点星形的开集 $U\subset\mathbb R^n$ 中，径向同伦 $F(t,x)=tx$ 将恒等映射缩到原点。把 $F^*\alpha$ 写成 $dt\wedge\beta_t+\gamma_t$，定义 $K\alpha=\int_0^1\beta_t\,dt$。对外微分逐项计算并用微积分基本定理，得到

$$
dK+Kd=F_1^*-F_0^*.
$$

正次数形式的 $F_0^*$ 为零，所以闭形式 $\alpha$ 满足 $\alpha=dK\alpha$。展开得到，$k>0$ 时

$$
(K\alpha)_x(v_1,\ldots,v_{k-1})
=\int_0^1t^{k-1}\alpha_{tx}(x,v_1,\ldots,v_{k-1})\,dt.
$$

闭形式局部恰当，不意味着全局恰当；$S^1$ 上积分为 $1$ 的角形式就是反例。

## 6.7 定向与 Stokes 定理 ★

定向是坐标图之间的 Jacobian 行列式为正的相容选择。定向流形上的顶次形式通过单位分解和坐标积分定义积分，坐标中的基础测度统一写为 $m_n$。这里还没有指定度量。

有边界流形采用“外向法向在前”的边界定向：若 $\boldsymbol n$ 横穿边界向外，则 $(\boldsymbol n,v_1,\ldots,v_{n-1})$ 为正向当且仅当 $(v_1,\ldots,v_{n-1})$ 为边界正向。此处法向只需横截，不需要单位长度。

> 对紧支撑的 $(n-1)$ 形式 $\alpha$，
>
> $$
> \int_M d\alpha=\int_{\partial M}\alpha.
> $$

证明用单位分解归约到全空间或半空间图。全空间中各项是紧支撑函数对一个坐标的导数，积分为零。半空间 $x^n\ge0$ 中切向导数项仍为零，法向项由一维基本定理给出边界值。具体地，$\alpha=f\,dx^1\wedge\cdots\wedge dx^{n-1}$ 的体积分为 $(-1)^n\int f(x',0)\,dm_{n-1}(x')$；外向为 $-\partial_n$，边界定向相对于 $(\partial_1,\ldots,\partial_{n-1})$ 的符号也是 $(-1)^n$。两边一致。再求和时
$\sum_i d(\rho_i\alpha)=d\alpha$，因 $\sum_i d\rho_i=0$，完成证明。

## 6.8 de Rham 上同调

定义
$H^k_{\mathrm{dR}}(M)=\ker(d:\Omega^k\to\Omega^{k+1})/\operatorname{im}(d:\Omega^{k-1}\to\Omega^k)$。
形式在光滑奇异单形上积分，Stokes 定理说明积分与两边的微分相容，因此诱导上同调之间的自然映射。de Rham 定理断言这个映射是同构：

$$
H^k_{\mathrm{dR}}(M)\cong H^k(M;\mathbb R).
$$

同构的证明可用坐标球上的 Poincaré 引理与两种理论的 Mayer–Vietoris 序列：单位分解给出形式短正合列，再用五引理从局部推进到全局。一般覆盖的完整拼接可用 Čech 双复形；此证明路线将在第 11 章解释。积分只使用光滑奇异链，而其与连续奇异链的比较需要相对光滑逼近，不能略掉这个接口。

## 6.9 Lie 导数

向量场 $X$ 的局部流 $\Phi_t$ 定义 $\mathcal L_X\alpha=\left.\frac d{dt}\right|_0\Phi_t^*\alpha$。内乘约定为
$(\iota_X\alpha)(v_1,\ldots)=\alpha(X,v_1,\ldots)$，并有 Cartan 公式

$$
\mathcal L_X=d\iota_X+\iota_Xd.
$$

对函数和坐标一阶形式直接验证，两边都是相同次数的导子，故推广到所有形式。第 10 章将用它证明 Hamilton 流保持辛形式。

## 6.10 Morse 理论与柄 ※

非退化临界点附近，Morse 引理给出
$f=f(p)-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^n(x^i)^2$。
指标 $\lambda$ 是 Hessian 的负特征值数，与坐标无关。子水平集跨过这样的临界值时附着一个 $\lambda$ 柄 $D^\lambda\times D^{n-\lambda}$，从同伦角度增加一个 $\lambda$ 胞腔。

紧流形的 Morse 函数因而给出有限 CW 型与 Morse 不等式。球面的高度函数只有指标 $0,n$ 两个临界点，正好对应第 3 章的两个胞腔。Morse 引理和柄附着定理的完整证明需要参数化坐标变换与梯度流，本节只把它们用于这一明确例子。

## 练习

1. 用坐标证明 $F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta$。
2. 在 $\mathbb R^2\setminus\{0\}$ 计算 $\alpha=(-y\,dx+x\,dy)/(2\pi(x^2+y^2))$ 的外微分及绕单位圆的积分。
3. 用第 6.6 节的公式求常系数 $2$ 形式的一个原形式。
4. 检查有向区间的 Stokes 公式，并确定两个端点的符号。
