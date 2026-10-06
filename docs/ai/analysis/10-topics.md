# 第 10 章 现代专题与交叉分支

前面的工具进入新领域时，研究对象会改变，但许多论证仍然熟悉：先找恰当空间，再控制极限，最后证明运算和模型彼此相容。本章沿着几个这样的联系阅读现代专题，而不是试图在一节内建立一门完整课程。

几何部分从 Dirichlet 能量走到流形上的 Laplace 与热核；数值部分把连续弱问题限制到有限维空间，并证明误差界；数据分析部分则把积分换序、凸性和概率极限应用到估计与优化。非标准分析、p进分析和算子代数改变了基础对象，适合作为进一步阅读的入口。

本章各节可以独立选读。热核曲率展开、几何流和算子代数表示等需要另外的理论，明确保留为专题结论；Céa、下降引理、Hoeffding 和 Delta 方法则在本章证明，便于看清前面工具如何实际工作。

## 10.1 几何分析

这一节使用流形、PDE、Sobolev中的工具。给流形添加 Riemann 度量 $g$，即每个切空间的正定内积光滑变化，可定义长度、梯度、体积和能量。体积测度统一记为 $\operatorname{vol}_g$，局部坐标中 $d\operatorname{vol}_g=\sqrt{\det(g_{ij})}\,dm_n(x)$；度量体积作为密度不要求流形可定向。下面的 $L^p(M)$ 均使用这一测度。

几何分析用 PDE 研究几何。模型是能量 $E(u)=\frac12\int_M|\nabla_gu|_g^2d\operatorname{vol}_g$，其变分给 Laplace–Beltrami 方程。先掌握这一标量模型，再读调和映射、极小曲面和曲率方程。

## 10.2 流形上的 Laplace 算子

按首页符号，$\Delta_g=\operatorname{div}_g\nabla_g$，局部公式

$$
\Delta_gu=\frac1{\sqrt{\det g}}\partial_i
\left(\sqrt{\det g}\,g^{ij}\partial_ju\right),
$$

重复指标求和。紧无边界流形上，$\int_M u\Delta_gu\,d\operatorname{vol}_g=-\int_M|\nabla_gu|_g^2\,d\operatorname{vol}_g$，因此 $-\Delta_g$ 非负。连通时核中的光滑函数只有常数。谱定理需要在 $L^2$ 中给出自伴实现；在正维数的非空紧无边界流形上，紧性和椭圆理论给离散谱 $0=\lambda_0\leq\lambda_1\leq\cdots\to\infty$，按重数计。

例如，标准圆周长度 $2\pi$，$\Delta=\partial_\theta^2$，$e^{ik\theta}$ 的 $-\Delta$ 特征值 $k^2$。局部几何在谱上体现为振动模式。

## 10.3 热核与曲率

热半群 $e^{t\Delta_g}$ 的核 $K_t(x,y)$ 给 $u(t,x)=\int K_t(x,y)u_0(y)d\operatorname{vol}_g(y)$。紧无边界流形上可用谱展开。对固定点，$t\downarrow0$ 时有

$$
K_t(x,x)\sim(4\pi t)^{-n/2}\left(1+\frac t6\operatorname{Scal}(x)+\cdots\right).
$$

这是光滑闭 Riemann 流形上的局部短时渐近结论，完整参数子构造省略。积分给热迹渐近，第一项读出体积，下一项涉及总标量曲率；边界存在时会增加边界项，不能套同一展开。

## 10.4 几何流初步

Ricci 流 $\partial_tg=-2\operatorname{Ric}(g)$ 使度量按曲率演化。它因微分同胚不变性带有规范退化；短时存在性不是直接套用标量热方程，而要用 DeTurck 等规范处理。

在球面模型中正曲率导致收缩；曲率可能有限时爆破，需研究奇点与重标度。学习路径是先掌握抛物 PDE、Riemann 曲率，再进入几何流；本节不预设曲率张量理论已经完整建立。

## 10.5 算子代数

这一节使用有界算子与谱中的工具。

> $C^*$-代数是带乘法、单位（若有）和对合的 Banach 代数，满足 $\|a^*a\|=\|a\|^2$。

$C(K)$ 与 Hilbert 空间的 $\mathcal B(H)$ 是典型例子，前者交换，后者一般不交换。

交换含单位 $C^*$-代数可表示为某紧 Hausdorff 空间上的连续函数代数（Gelfand 表示）；非交换代数把这一图景推广为非交换几何。von Neumann 代数还要求相应弱算子闭性。不要把“代数闭”与“拓扑闭”混为一谈。

## 10.6 遍历论

测度保持变换 $T$ 满足 $\mu(T^{-1}A)=\mu(A)$。在概率空间 $(\Omega,\mathcal F,\mathbb P)$ 上，则使用 $\mathbb P(T^{-1}A)=\mathbb P(A)$。记 $T^{\circ k}$ 为 $T$ 的 $k$ 次迭代，$T^{\circ0}=\operatorname{id}$。Birkhoff 定理断言：对 $f\in L^1(\Omega,\mathcal F,\mathbb P)$，时间平均 $n^{-1}\sum_{k=0}^{n-1}f(T^{\circ k}(x))$ 几乎处处及 $L^1$ 收敛到 $\mathbb E[f\mid\mathcal I]$，$\mathcal I$ 为不变事件 $\sigma$-代数（模零集）。

称变换遍历，是指它的不变事件只有概率 0 或 1，此时极限为 $\int_\Omega f\,d\mathbb P$。圆周无理旋转 $x\mapsto x+\alpha\pmod1$ 是例子，此时概率测度取 $m_{\mathbb T}$：对指数函数，几何和除以 $n$ 趋零；三角多项式逼近再给连续函数均值收敛。完整可积版本用遍历定理。

## 10.7 非标准分析 ☆

非标准分析构造实数的扩张 $\,{}^*\mathbb R$，含非零无穷小和无限大数，并有适用语言内的迁移原理。有限超实数可取标准部分；可微性可表述为所有非零无穷小 $h$ 的差商标准部分等于 $f'(x)$。

它需要逻辑、超积与内部集合工具。迁移不适用于任意涉及“标准”的外部命题；标准部分映射本身是外部操作。入门可比较 $\varepsilon$–$\delta$ 连续定义与无穷小表述，而不是把无穷小当普通实数。

## 10.8 p进分析 ☆

> 对素数 $p$，非零有理数写为 $p^k a/b$，其中 $p$ 不整除 $ab$，定义 $|x|_p=p^{-k}$。

它满足强三角不等式 $|x+y|_p\leq\max(|x|_p,|y|_p)$。完备化得到 $\mathbb Q_p$。

例如，$\sum_{k\geq0}p^k$ 在实数中发散，但在 $p$ 进范数中项趋零、尾和由首项控制，因此收敛到 $1/(1-p)$。$p$ 进收敛改变的是度量，不是代数恒等式。$\mathbb Q_p$ 局部紧，积分用 Haar 测度建立，不能直接搬用 Euclidean 长度。

## 10.9 数值分析

这一节使用范数、稳定性、渐近中的工具。算法的误差来自模型、离散、迭代与舍入。条件数描述问题对数据的敏感度，稳定性描述算法如何传播误差；二者不同。

对可逆矩阵，$\kappa(A)=\|A\|\|A^{-1}\|$。解 $Ax=b$ 的数据相对误差可被条件数放大。反例：矩阵几乎奇异时，一个残差很小的近似解仍可能有大误差，因为 $\|x-\widetilde x\|\leq\|A^{-1}\|\|b-A\widetilde x\|$。

## 10.10 从弱问题到有限元误差估计

差分直接近似导数，有限元则先保留弱方程，再限制允许的函数。前者例如中心二阶差分 $[u(x+h)-2u(x)+u(x-h)]/h^2=u''(x)+O(h^2)$，Taylor 四阶余项保证精度；时间演化还须检查稳定性，一维显式热格式通常要求 $\Delta t/(\Delta x)^2\leq1/2$。

有限元从 $a(u,v)=\ell(v)$ 对所有 $v\in H_0^1$ 出发，选有限维 $V_h\subset H_0^1$，求 $u_h\in V_h$ 使 $a(u_h,v_h)=\ell(v_h)$。假设双线性形式有界常数 $M$、强制常数 $c$，有限维 Lax–Milgram 保证离散解唯一。

> 在上述假设下，离散解满足 Céa 估计
>
> $$
> \|u-u_h\|\leq\frac Mc\inf_{v_h\in V_h}\|u-v_h\|.
> $$

相减得到 Galerkin 正交 $a(u-u_h,v_h)=0$。令 $e=u-u_h$，任取 $v_h\in V_h$，因为 $u_h-v_h\in V_h$，

$$
c\|e\|^2\leq a(e,e)=a(e,u-v_h)\leq M\|e\|\|u-v_h\|.
$$

零误差时结论已成立，否则相除再取下确界，得到 Céa 引理 $\|u-u_h\|\leq(M/c)\inf_{v_h\in V_h}\|u-v_h\|$。它说，算法误差至多是该空间最佳逼近误差的固定倍数。证明没有要求先知道解析解，只要求弱问题的有界性与强制性；后续网格估计负责研究右边的逼近误差。

## 10.11 谱方法

谱方法用全局正交模式，如周期 Fourier 或区间多项式。光滑周期函数 Fourier 系数快速衰减，解析函数在适当复带域内延拓时常指数衰减，因此高精度；跳跃则系数仅慢衰减并有 Gibbs 现象。

周期 Poisson 方程 $-u''=f$ 需 $\widehat f(0)=0$，非零模式 $\widehat u(k)=\widehat f(k)/(4\pi^2k^2)$，零模式由均值规定。它把可解条件、谱、数值截断连接起来。

## 10.12 信号处理中的分析 △

线性时不变系统常写 $y=h*x$，频率响应为 $\widehat h$，因此滤波是各频率乘权。采样定理说明采样前低通的必要性；非带限信号不能从有限采样无条件完美重构。

离散 Fourier 变换是有限维正交变换，并非连续变换的自动精确替代。窗函数减少截断边缘的不连续，却会改变频谱分辨率。实际分析要明确采样率、窗口长度与归一化。

## 10.13 图像分析 △

图像可视为二维函数，平滑由热流或卷积完成。边缘是快速变化或 BV 跳跃。典型去噪模型为 $\min_u\frac12\|u-f\|_2^2+\lambda|Du|(\Omega)$，后项为 BV 总变差，鼓励保留边缘而惩罚过多振荡。

这里 $\Omega\subset\mathbb R^2$，$L^2$ 范数使用 $m_2$；BV 函数的分布导数 $Du$ 是向量值 Radon 测度，$|Du|$ 是它的总变差测度，不是函数 $u$ 的绝对值。它推广了第 3 章一维增量测度 $\nu_F$ 的观点。

总变差项不可微，需次微分、对偶或分裂算法；若把它简单写为处处 $|\nabla u|$，会漏掉跳跃的奇异部分。离散图像模型还需说明边界约定与差分定义。

## 10.14 机器学习中的积分与下降估计

期望风险 $R(\theta)=\mathbb E\ell(\theta,Z)$ 与经验风险 $R_n=n^{-1}\sum\ell(\theta,Z_i)$ 把积分、概率和优化连接起来。要交换梯度与期望，应当在参数邻域中找到可积函数统一控制参数导数，再用控制收敛；不能只因单个样本损失可微就完成换序。

先看一个控制函数增量的结论：

> 若 $F$ 在凸开集上可微，且梯度为 $L$-Lipschitz，则对其中任意 $x,y$ 有
>
> $$
> F(y)\leq F(x)+\nabla F(x)\cdot(y-x)+\frac L2\|y-x\|^2.
> $$

梯度下降的基本估计同样来自积分。若 $F$ 的梯度 $L$-Lipschitz，写 $h=y-x$，沿线段使用基本定理，得

$$
F(y)-F(x)-\nabla F(x)\cdot h
=\int_0^1[\nabla F(x+th)-\nabla F(x)]\cdot h\,dt
\leq\frac L2\|h\|^2.
$$

代入 $h=-\eta\nabla F(x)$，得到 $F(x-\eta\nabla F(x))\leq F(x)-\eta(1-L\eta/2)\|\nabla F(x)\|^2$。因此 $0<\eta<2/L$ 给下降；若固定步长且目标有下界，求和说明梯度范数趋零。要进一步保证全球最优，还需凸性或其他结构。每个结论都应与其条件一起使用，下降性并不是全局最优性的替代。

## 10.15 Hoeffding 集中不等式

Chebyshev 只用方差给多项式尾界，独立有界变量还允许指数尾。

> 设独立 $X_i\in[a_i,b_i]$，则对 $t>0$。
>
> $$
> \mathbb P\left(\sum_i(X_i-\mathbb EX_i)\geq t\right)
> \leq\exp\left(-\frac{2t^2}{\sum_i(b_i-a_i)^2}\right).
> $$

先证明单变量指数控制。令 $\psi(\lambda)=\log\mathbb Ee^{\lambda(X-\mathbb EX)}$，有界性允许任意阶微分。$\psi(0)=\psi'(0)=0$；$\psi''(\lambda)$ 是指数倾斜后分布的方差。倾斜并不改变取值区间，任意落在 $[a,b]$ 的变量的方差都不超过 $(b-a)^2/4$：关于均值的平方偏差不超过关于区间中点的平方偏差，而后者逐点不超过这个量。两次积分得 $\psi(\lambda)\leq\lambda^2(b-a)^2/8$。

对和使用指数 Markov，独立性使矩生成函数乘起来，因此概率不超过 $\exp(-\lambda t+\lambda^2\sum_i(b_i-a_i)^2/8)$。取最优 $\lambda=4t/\sum_i(b_i-a_i)^2$，得到公式；如果全部区间长度为零，和恒为零，事件概率直接为零。对负偏差同样估计，合并给双侧界。

对 Bernoulli 样本均值，误差超过 $\varepsilon$ 的概率至多 $2e^{-2n\varepsilon^2}$。同时控制多个坐标可再用并集界，坐标数会进入误差阈值。独立有界性是这里取得指数估计的实际来源。

## 10.16 Delta 方法与 Laplace 渐近

如果已经知道估计量的渐近分布，光滑变换后的分布可以由线性近似得到。设 $\sqrt n(\widehat\theta_n-\theta)\Rightarrow \mathcal N(0,\Sigma)$，$g$ 在 $\theta$ 可微。分布收敛使放大误差有统一概率尾控制，因而 $\widehat\theta_n\to\theta$ 依概率。可微性给

$$
g(\widehat\theta_n)-g(\theta)
=Dg(\theta)(\widehat\theta_n-\theta)+r_n,\qquad
\frac{\|r_n\|}{\|\widehat\theta_n-\theta\|}\longrightarrow0
\quad\text{依概率}.
$$

放大误差在概率意义下有界，所以 $\sqrt n r_n\to0$ 依概率。给定连续测试函数，先把主项限制在高概率紧集上，用一致连续性控制小扰动，再控制紧集外尾部，即可证明加上此余项不改变分布极限。因此得到 $\sqrt n(g(\widehat\theta_n)-g(\theta))\Rightarrow \mathcal N(0,Dg\Sigma Dg^{\mathsf T})$。若 $Dg=0$，一阶极限退化，需要更高阶展开。

Laplace 方法处理另一类渐近：积分质量随大参数集中到最小点。设 $\phi\in C^2([a,b])$ 有唯一内部全局极小点 $x_0$，$\phi''(x_0)>0$；$A$ 连续且 $A(x_0)\ne0$。取小邻域，Taylor 给 $\phi(x)-\phi(x_0)\geq c(x-x_0)^2$。邻域外紧集上则有正间隙 $\phi-\phi(x_0)\geq\delta>0$，其积分比主尺度指数更小。

邻域内令 $y=\sqrt n(x-x_0)$，提出 $e^{-n\phi(x_0)}/\sqrt n$。被积函数逐点趋于 $A(x_0)e^{-\phi''(x_0)y^2/2}$，绝对值被可积的常数倍 $e^{-cy^2}$ 控制。控制收敛与 Gaussian 积分得到

$$
\int_a^be^{-n\phi(x)}A(x)dx
\sim A(x_0)e^{-n\phi(x_0)}\sqrt{\frac{2\pi}{n\phi''(x_0)}}.
$$

这段证明明确分开局部 Taylor、变量缩放和尾部控制。多个极小点、边界极小、零振幅或退化二阶导数都会改变主项，不能沿用同一公式。

## 练习与提示

1. 在圆周上写热方程每个 Fourier 模式的时间因子。
2. 证明 $p$ 进级数中项趋零足以使级数 Cauchy，指出实数情形为何不成立。
3. 推导 Céa 引理，标出正交性、强制性与有界性各用在哪里。
4. Bernoulli 样本均值误差超过 $\varepsilon$ 的双侧 Hoeffding 界是什么？答案 $2e^{-2n\varepsilon^2}$。

[附录与参考资料](appendices.md)
