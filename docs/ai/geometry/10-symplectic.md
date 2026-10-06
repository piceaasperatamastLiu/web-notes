# 第 10 章 辛几何与 Hamilton 系统

辛几何描述位置与动量的耦合。它没有指定长度，却能从一个函数产生动力系统；这与 Riemann 几何的“从度量产生梯度”形成两条不同的主线。

## 10.1 辛形式与偶数维数 ★

> 辛形式是闭且逐点非退化的二阶形式 $\omega$：
> $d\omega=0$，且 $\iota_v\omega=0$ 蕴含 $v=0$。

反对称矩阵在奇数维的行列式为零，故辛流形维数为 $2n$。标准模型为
$\omega=\sum_{j=1}^n dq^j\wedge dp_j$。
逐次选取 $\omega(u,v)=1$ 的向量对，再取其辛正交补，可证明所有辛向量空间有这样的基。

$\omega^n/n!$ 给出自然定向及体积形式，但不提供内积。紧无边界辛流形的 $\omega$ 不可能恰当：若 $\omega=d\alpha$，则 $\omega^n=d(\alpha\wedge\omega^{n-1})$，Stokes 使其积分为零，与自然定向下的正体积矛盾。

## 10.2 Darboux 定理的局部证明 ★

> 每个辛流形的每一点附近都存在坐标，使 $\omega=\sum dq^j\wedge dp_j$。

先用线性代数让 $\omega$ 在原点等于标准形式 $\omega_0$。在足够小星形球上，$\omega_t=\omega_0+t(\omega-\omega_0)$ 对所有 $t\in[0,1]$ 非退化。第 6 章的同伦算子给出 $\alpha$，使 $d\alpha=\omega-\omega_0$，且 $\alpha(0)=0$。

解 $\iota_{X_t}\omega_t=-\alpha$ 得到光滑时间依赖向量场。缩小初始球后，其流 $\Phi_t$ 在整个 $[0,1]$ 存在。由 Cartan 公式，

$$
\frac d{dt}\Phi_t^*\omega_t
=\Phi_t^*(d\alpha+d\iota_{X_t}\omega_t)=0.
$$

所以 $\Phi_1^*\omega=\omega_0$。局部不存在类似 Riemann 曲率的辛不变量；全局性质依然丰富，例如上一节的非恰当性。

## 10.3 Hamilton 向量场与符号 ★

固定约定

$$
\iota_{X_H}\omega=dH,\qquad
X_H=\sum_j\left(\frac{\partial H}{\partial p_j}\partial_{q^j}
-\frac{\partial H}{\partial q^j}\partial_{p_j}\right).
$$

于是 $\dot q^j=H_{p_j}$、$\dot p_j=-H_{q^j}$。Cartan 公式证明 $\mathcal L_{X_H}\omega=0$，且 $X_H(H)=0$。局部流保持辛形式与能量，不保证流全局存在。

定义 Poisson 括号

$$
\{f,h\}=\omega(X_f,X_h)=X_h(f)
=\sum_j(f_{q^j}h_{p_j}-f_{p_j}h_{q^j}).
$$

沿 Hamilton 运动 $\dot f=\{f,H\}$。由
$\iota_{[X_f,X_h]}\omega=\mathcal L_{X_f}(dh)=d(X_fh)$
得到 $[X_f,X_h]=-X_{\{f,h\}}$。这个负号与本讲义的内乘约定相连。Jacobi 恒等式可在 Darboux 坐标逐项验证；不能只从向量场括号推出它，因为常数函数的 Hamilton 场为零。

## 10.4 余切丛与 Lagrange 子流形

设 $\pi:T^*Q\to Q$ 为丛投影，$(q,p)$ 中的 $p$ 是 $q$ 处的余向量。$T^*Q$ 有典范一阶形式 $\lambda_{(q,p)}(v)=p(d\pi(v))$，局部为 $p_jdq^j$。本讲义规定 $\omega=-d\lambda=dq^j\wedge dp_j$。

在 $2n$ 维辛流形中，维数为 $n$ 且 $\omega$ 限制为零的子流形叫 Lagrange 子流形。若 $\alpha$ 是 $Q$ 上的一阶形式，截面 $q\mapsto(q,\alpha_q)$ 的像就是 $\operatorname{graph}\alpha$。沿这个截面拉回辛形式得到 $-d\alpha$，故它是 Lagrange 当且仅当 $\alpha$ 闭；特别地，函数微分的图像总是 Lagrange。

## 10.5 矩映射与守恒量 ★

对保持 $\omega$ 的左作用，矩映射 $J:M\to\mathfrak g^*$ 满足
$dJ_\xi=\iota_{\xi_M}\omega$，其中 $J_\xi(x)=J(x)(\xi)$。
等变约定为 $J(gx)(\xi)=J(x)(\operatorname{Ad}_{g^{-1}}\xi)$。因此
$\{J_\xi,J_\eta\}=J_{[\xi,\eta]}$，与第 7 章基本场的负括号相容。

若 Hamilton 函数 $H$ 对群作用不变，则
$\{J_\xi,H\}=-\xi_M(H)=0$，所以各分量守恒。平移对应动量、旋转对应角动量，是此结论的典型实例。

## 10.6 辛约化的证明

设 $0$ 是 $J$ 的正则值，且 $G$ 在 $J^{-1}(0)$ 上自由、适当。则 $M_{\mathrm{red}}=J^{-1}(0)/G$ 为流形，维数为 $\dim M-2\dim G$。

在水平集上，$v\in TJ^{-1}(0)$ 等价于 $\omega(\xi_M,v)=0$ 对所有 $\xi$ 成立。因而 $\omega$ 限制的核恰为轨道方向：令 $W_x=T_x(Gx)$ 为轨道的切空间，则 $T_xJ^{-1}(0)=W_x^{\omega}$。零水平集上的轨道仍位于水平集内，故 $W_x\subset W_x^{\omega}$，于是限制形式的核为 $W_x^{\omega}\cap(W_x^{\omega})^{\omega}=W_x$。形式又对作用不变，所以唯一下降为商上的非退化闭形式。这里正则值保证余维，自由与适当保证商流形，三者各有作用。

## 10.7 Poisson 流形、辛拓扑与 Floer 理论 ☆

Poisson 流形允许 Poisson 张量退化，例如 $\mathfrak g^*$ 的线性 Lie–Poisson 结构；其辛叶是余伴随轨道。叶的维数可能变化，不能用一个全局非退化形式代替。

辛拓扑研究 Darboux 定理看不出的全局刚性。非挤压定理说半径 $r$ 的标准辛球若嵌入某一共轭坐标平面的半径 $R$ 辛圆柱，则 $r\le R$；只比较总体积看不出这点。

Floer 理论以周期轨道或 Lagrange 交点作为链生成元，以适当方程的有限能量解定义微分。紧性、横截与定向是使 $\partial^2=0$ 成立的实质工作。此处提供学习入口，不把任意交点计数都称作 Floer 同调。

## 练习

1. 对 $H=(p^2+q^2)/2$ 解 Hamilton 方程，检查能量与面积保持。
2. 计算 $f=q^2/2,h=p^2/2$ 的向量场括号，验证负号。
3. 证明闭辛流形的 $H^2_{\mathrm{dR}}$ 非零。
4. 检查余切丛零截面为 Lagrange 子流形。
