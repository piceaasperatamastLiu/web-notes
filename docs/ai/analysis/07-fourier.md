# 第 7 章 傅里叶分析与调和分析

把一个函数分成不同频率的振动，可以把某些微分运算化为乘法，也可以区分平滑结构与快速变化。问题在于：频率系数确实存在以后，无穷多个振动是否还能重构原函数？重构又是在逐点、一致还是均方意义下成立？这些问题需要不同的证明。

我们先在圆周上研究部分和与平均和，再进入全空间变换。正的近似恒等核将反复出现：它既证明 Fejér 收敛，也证明光滑化和 Fourier 反演。之后的极大函数与奇异积分则处理更困难的局部控制和抵消问题。

全章取 $\mathbb T=\mathbb R/\mathbb Z$，其归一化 Haar 测度记为 $m_{\mathbb T}$，总质量为 $1$；圆周积分可在基本域上写成 $\int_0^1\,dm_1(x)$。全空间使用 Lebesgue 测度 $m_n$，$dx,dy,d\xi$ 分别简写 $dm_n(x),dm_n(y),dm_n(\xi)$；7.15–7.18 的集合测度也统一写 $m_n(E)$，不用集合的绝对值符号代替测度。全空间变换指数为 $-2\pi ix\cdot\xi$。公式中的常数由这一约定决定，计算例题时应始终使用同一套约定。

## 7.1 Fourier 级数

对于周期函数，一个自然的想法是把它表示成不同频率的振动之和。我们先固定周期为 1，并用 $\mathbb T=\mathbb R/\mathbb Z$ 表示圆周。频率为整数，是因为 $e^{2\pi ikx}$ 在 $x$ 增加 1 后保持不变。

> 对于 $f\in L^1(\mathbb T)$，定义它的 **Fourier 系数**和部分和为
>
> $$
> \widehat f(k)=\int_0^1f(x)e^{-2\pi ikx}dx,\qquad
> S_Nf(x)=\sum_{|k|\leq N}\widehat f(k)e^{2\pi ikx}.
> $$

指数函数的模为 1，因此可积性保证每个系数存在。但系数存在还没有证明无穷级数收敛，更没有证明其和等于原函数。这将是本章首先需要解决的问题。

例如取 $f(x)=x$，$0<x<1$，再作周期延拓。直接积分给 $\widehat f(0)=1/2$；$k\ne0$ 时分部积分得 $\widehat f(k)=-1/(2\pi ik)$。于是候选展开为

$$
f(x)=\frac12-\sum_{k\geq1}\frac{\sin(2\pi kx)}{\pi k}.
$$

这个等式是否成立，在哪些点成立，以什么意义成立，需要下面的收敛理论回答。

## 7.2 Dirichlet 核

部分和是卷积 $S_Nf=f*D_N$，其中

$$
D_N(x)=\sum_{|k|\leq N}e^{2\pi ikx}
=\frac{\sin((2N+1)\pi x)}{\sin(\pi x)}.
$$

整数点处按连续延拓取 $2N+1$。它积分为 1，但有正负振荡，且 $L^1$ 范数随 $N$ 对数增长。故 $S_N$ 在连续函数的一致范数下不能统一有界，也不能直接作为正的近似恒等核。

## 7.3 三角级数收敛性

> 若周期函数分段 $C^1$（只有有限个分段点），则 Fourier 部分和在每点趋于左右极限平均，在连续点趋于函数值。

证明利用 Dirichlet 核，把局部差值除以 $\sin\pi t$ 后的可积性与振荡抵消结合。

上一例在 $0<x<1$ 收敛到 $x$，在周期跳跃点收敛到 $1/2$。跳跃附近 Gibbs 振荡不因增加频率而消除其相对过冲。一般连续函数不保证 Fourier 部分和逐点处处收敛；不能把上述正则性条件省略。

## 7.4 Fejér 和

Dirichlet 核的正负振荡使部分和难以控制。一个自然办法是平均前面的部分和，令 $\sigma_Nf=(N+1)^{-1}\sum_{j=0}^NS_jf$。它仍是三角多项式，并等于 $f*F_N$，其中

$$
F_N(t)=\frac1{N+1}\left|\sum_{j=0}^Ne^{2\pi ijt}\right|^2
=\frac1{N+1}\left(\frac{\sin((N+1)\pi t)}{\sin\pi t}\right)^2.
$$

Fejér 核的作用由下面的结论说明：

> 连续周期函数的 Fejér 和一致收敛到原函数。对于 $1\leq p<\infty$ 和 $f\in L^p(\mathbb T)$，Fejér 和也在 $L^p$ 中趋于 $f$。

为了证明它，先检查核的性质。

平方表达式表明它非负；展开后只有对角项积分非零，所以 $\int_0^1F_N=1$。固定 $0<\delta<1/2$，在圆周距离 $|t|\geq\delta$ 处，$\sin\pi t$ 远离零，因此该区域积分不超过 $C_\delta/(N+1)$，趋零。核于是把单位质量越来越集中在原点。

若 $f$ 连续，圆周紧使其一致连续。给定 $\varepsilon$，选 $\delta$ 使 $|f(x-t)-f(x)|<\varepsilon$ 对所有 $x$ 及 $|t|<\delta$ 成立。分开积分，得到

$$
\|\sigma_Nf-f\|_\infty
\leq\varepsilon\int_{|t|<\delta}F_N(t)dt
+2\|f\|_\infty\int_{|t|\geq\delta}F_N(t)dt.
$$

后项趋零，而 $\varepsilon$ 任意，所以一致收敛。对于 $1\leq p<\infty$，核非负且单位质量，Hölder 给 $|f*F_N(x)|^p\leq\int|f(x-t)|^pF_N(t)dt$（$p=1$ 时直接用三角不等式），再用 Fubini 得 $\|f*F_N\|_p\leq\|f\|_p$。先用连续函数近似 $f$，在连续近似上使用刚证明的一致收敛，另两项由这个统一算子界控制，得到 $L^p$ 收敛。

这里平均没有改变目标函数，却把带符号核换成了正核，使总质量和远处尾部都可控。这也是后面近似恒等核论证的共同结构。

## 7.5 L2 理论

$e_k(x)=e^{2\pi ikx}$ 在 $L^2(\mathbb T)$ 正交归一。Fejér 的一致逼近使三角多项式在连续函数中稠密，再用连续函数在 $L^2$ 中稠密，得到 $(e_k)$ 是正交基。

因此 $S_Nf$ 是到有限频率子空间的正交投影，并在 $L^2$ 趋于 $f$。这是均方误差结论，并不直接给每一点收敛。$L^2$ 函数的几乎处处 Fourier 收敛是更深的 Carleson–Hunt 理论，本讲义不证明。

## 7.6 Parseval 等式

> 由正交基展开得到 $\int_0^1|f|^2=\sum_{k\in\mathbb Z}|\widehat f(k)|^2$。

每个部分和给 Bessel 不等式，完备性使余差趋零，才得到等号。

对 $f(x)=x$，左侧 $1/3$，右侧 $1/4+(1/(2\pi^2))\sum_{k\geq1}1/k^2$，从而 $\sum1/k^2=\pi^2/6$。此例把频率分解用于计算数项级数。

## 7.7 Fourier 变换与 Gaussian 反演

全空间没有离散周期，频率改为连续变量。

> 对 $f\in L^1(\mathbb R^n)$，定义 $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$。

控制收敛给连续性及 $\|\widehat f\|_\infty\leq\|f\|_1$。先对光滑紧支撑函数分部积分得无穷远衰减，再用 $L^1$ 稠密性与这条统一界，得到 Riemann–Lebesgue 引理。

> 若 $f\in L^1(\mathbb R^n)$ 且 $\widehat f\in L^1(\mathbb R^n)$，则
>
> $$
> f(x)=\int_{\mathbb R^n}\widehat f(\xi)e^{2\pi ix\cdot\xi}d\xi
> $$
>
> 几乎处处成立。右侧是连续函数；若 $f$ 本身连续，则等式处处成立。

现在来证明这一反演结论。

反演之前先算 Gaussian。二维极坐标给 $(\int_\mathbb Re^{-\pi x^2}dx)^2=1$，所以一维积分为 1。对 $g=e^{-\pi x^2}$，微分积分与分部积分给 $\widehat g'(\xi)=-2\pi\xi\widehat g(\xi)$，且 $\widehat g(0)=1$，故 $\widehat g=e^{-\pi\xi^2}$。乘积及缩放得到多维版本。

为避免一开始就无条件交换两个振荡积分，先加入 Gaussian 阻尼：

$$
I_\varepsilon(x)=\int\widehat f(\xi)e^{2\pi ix\cdot\xi}e^{-\pi\varepsilon|\xi|^2}d\xi.
$$

对 $f\in L^1$，阻尼使二重积分绝对可积，Fubini 合法。代入变换并使用 Gaussian 公式，得到 $I_\varepsilon=f*\gamma_\varepsilon$，其中 $\gamma_\varepsilon(x)=\varepsilon^{-n/2}e^{-\pi|x|^2/\varepsilon}$。核非负、单位质量、远处质量趋零，故在 $L^1$ 中 $f*\gamma_\varepsilon\to f$；证明与 Fejér 一样，先用连续紧支撑函数近似，或用平移连续性。这里的 $\gamma_\varepsilon$ 与第 8 章热核的参数不同：$\gamma_\varepsilon=G_{\varepsilon/(4\pi)}$。

若还知道 $\widehat f\in L^1$，控制收敛使 $I_\varepsilon$ 一致趋于连续函数 $F(x)=\int\widehat f(\xi)e^{2\pi ix\cdot\xi}d\xi$。另一方面，从 $L^1$ 收敛抽取几乎处处收敛子列，便识别 $F=f$ 几乎处处。若原 $f$ 连续，则处处相等。这样得到反演公式，并明确了一般可积函数只能按等价类理解的原因。

## 7.8 卷积

平移一个核，让它在每个位置对函数取加权平均，就得到卷积。它把平滑、滤波和传播写成同一运算，频率域中的乘法公式则说明这些操作如何改变各频率。

> $(f*g)(x)=\int f(x-y)g(y)dy$。

换元后也等于 $\int f(y)g(x-y)dy$。这一写法对应有限群章的 $\sum_yf(y)g(y^{-1}x)$，因为加法群中的 $y^{-1}x$ 就是 $x-y$。

$L^1*L^1\subset L^1$，Tonelli 给 $\|f*g\|_1\leq\|f\|_1\|g\|_1$；Young 不等式在 $1+1/r=1/p+1/q$、各指数至少 1 时给 $\|f*g\|_r\leq\|f\|_p\|g\|_q$。

$\widehat{f*g}=\widehat f\widehat g$（先在 $L^1$ 内用 Fubini）。取非负 $\rho\in C_c^\infty$、积分 1，$\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$，则对有限 $p$，$f*\rho_\varepsilon\to f$ 于 $L^p$。证明结合平移在 $L^p$ 的连续性与核的单位质量；平移连续性可先在 $C_c$ 验证再稠密延拓。它补齐 5.5 的光滑化工具。

## 7.9 Plancherel 定理

对一般 $L^2$ 函数，原始 Fourier 积分可能不绝对存在，但变换仍可由完备性定义。先在 Schwartz 空间 $\mathcal S$ 工作：其中光滑函数的所有 $x^\alpha\partial^\beta f$ 有界。分部积分和微分积分说明变换保持 $\mathcal S$，上一节反演使它在 $\mathcal S$ 上可逆。

> Fourier 变换在 Schwartz 空间上的定义唯一延拓为 $L^2(\mathbb R^n)$ 上的酉算子，即它是满射并保持内积。特别地，$\|\widehat f\|_2=\|f\|_2$。

对 $f,g\in\mathcal S$，因为 $f$ 与 $\widehat g$ 都可积，Fubini 给

$$
\int\widehat f(\xi)\overline{\widehat g(\xi)}d\xi
=\int f(x)\overline{\left(\int\widehat g(\xi)e^{2\pi ix\cdot\xi}d\xi\right)}dx
=\int f(x)\overline{g(x)}dx.
$$

取 $g=f$ 得等距性。现在用 $\mathcal S$ 在 $L^2$ 中稠密，给任意 $f\in L^2$ 取 $f_j\to f$，则 $\widehat f_j$ 由等距性是 Cauchy 列，其极限定义为 $\widehat f$。若选另一逼近列，二者变换差的范数等于原差，故定义独立。等距算子的值域闭；又因变换在 $\mathcal S$ 上可逆，值域包含稠密的 $\mathcal S$，所以满射。这证明变换是 $L^2$ 的酉算子。

若 $f\in L^1\cap L^2$，用截断和光滑化得到在两种范数下同时逼近的 Schwartz 函数。原始积分定义给变换一致收敛，$L^2$ 定义给均方收敛，抽子列便知两者几乎处处相同。由此，积分定义、反演与 Hilbert 空间延拓彼此相容，但不能把一般 $L^2$ 变换都当成绝对积分。

## 7.10 不确定性原理

一维取 $f\in\mathcal S(\mathbb R)$，分部积分 $\int(x|f|^2)'=0$，故 $\|f\|_2^2\leq2\|xf\|_2\|f'\|_2$。由 $\widehat{f'}=2\pi i\xi\widehat f$ 与 Plancherel，

$$
\|xf\|_2\,\|\xi\widehat f\|_2\geq\frac1{4\pi}\|f\|_2^2.
$$

平移与调制后得到围绕任意中心的版本。高斯实现等号；空间与频率无法同时任意集中。常数取决于变换归一化，此处与首页约定一致。

## 7.11 缓增分布

> 缓增分布 $\mathcal S'$ 是 Schwartz 空间的连续线性对偶。

多项式增长的局部可积函数、Dirac 分布及其导数均为例子。任意一般分布未必缓增，例如增长过快的函数不一定能对所有 Schwartz 测试函数积分。

Schwartz 函数的快速衰减使无穷远端可控，适合全空间 Fourier 变换；$C_c^\infty$ 适合局部问题，两种测试空间任务不同。

## 7.12 分布 Fourier 变换

> 对线性分布定义 $\widehat T(\varphi)=T(\widehat\varphi)$。这里是泛函求值，不是 Hilbert 内积，因此不对测试函数取共轭。

这与普通函数变换的 Fubini 计算一致。由此 $\widehat{\delta_0}=1$、$\widehat1=\delta_0$，$\widehat{\partial_jT}=2\pi i\xi_j\widehat T$。

并且 $\widehat{\widehat T}$ 是 $T$ 的反射。计算时要区分反演与再做一次正变换；不能在双重变换中漏掉 $x\mapsto-x$。

## 7.13 基本解

> 线性常系数微分算子 $P(D)$ 的**基本解** $E$ 满足 $P(D)E=\delta_0$。

适当支撑或可积条件下 $u=E*f$ 解 $P(D)u=f$。频率域把问题变成符号乘法，但符号零点可能产生分布与非唯一性。

例如 $-\Delta$ 在 $n\geq3$ 的基本解为 $E(x)=[(n-2)|S^{n-1}|]^{-1}|x|^{2-n}$，二维为 $-(2\pi)^{-1}\log|x|$。离原点调和，原点处常数由小球通量归一确定。符号是 $4\pi^2|\xi|^2$，与 $-\Delta$ 的正号一致。

## 7.14 Hilbert 变换

在实线对 Schwartz 函数定义 $Hf(x)=\mathrm{p.v.}\,\pi^{-1}\int f(x-y)/y\,dy$，主值在原点对称截去小区间。核不绝对可积，关键是奇性抵消。频率乘子为 $-i\operatorname{sgn}\xi$，因此在 $L^2$ 等距，且 $H^2=-I$。

对 $1<p<\infty$，$H$ 在 $L^p$ 有界；在 $p=1$ 只有弱型估计，一般不是强 $L^1$ 有界。结论的证明属于 7.17–7.18 的奇异积分框架。

## 7.15 覆盖引理

极大函数把每点的许多局部平均都考虑进去，产生大量重叠球。如果直接相加球的体积，会重复计算同一部分。覆盖引理解决这个几何问题。

先证明最常用的有限版本。给有限球族，选半径最大的一个，删去与它相交的球，再在剩余中重复。所选球两两不交。被删球 $B$ 与某所选 $B_j$ 相交且半径不超过它，所以 $B\subset3B_j$：任意点先走到 $B$ 的中心，再走到 $B_j$ 中心，总距离至多 $r_B+(r_B+r_j)\leq3r_j$。因此原并被所选球的 3 倍放大覆盖。

对半径有界的任意族，按 dyadic 半径尺度从大到小，在每层选极大不交子族，并排除与先前已选球相交者。每个未选球与半径至少其一半的已选球相交，故包含于其 5 倍球。Euclidean 可分性使不交正半径球族可数：每球选一个不同的有理点即可。这给一般 5 倍球引理。

下一节对每个紧集只需要有限子覆盖，因此有限版本已经足以证明弱型极大估计；一般版本解释了同类论证如何扩展到更复杂覆盖问题。

## 7.16 极大估计与 Lebesgue 微分定理

覆盖引理给出的体积控制，可以用于局部平均的最大值。下面将证明：

> Hardy–Littlewood 极大函数满足 $m_n(\{x:Mf(x)>\lambda\})\leq C_n\|f\|_1/\lambda$。对于 $1<p<\infty$，还满足 $\|Mf\|_p\leq C_{n,p}\|f\|_p$。由此可以推出 Lebesgue 微分定理：局部可积函数在几乎每点的局部平均趋于该点的函数值。

对 $f\in L^1$，定义 $Mf(x)=\sup_{r>0}m_n(B(x,r))^{-1}\int_{B(x,r)}|f(y)|\,dm_n(y)$。令 $E_\lambda=\{Mf>\lambda\}$。每点 $x\in E_\lambda$ 有一个中心在 $x$ 的球，其平均超过 $\lambda$。对任意紧集 $K\subset E_\lambda$，选有限个这样的球覆盖它，再用上一节的不交选择，得到

$$
m_n(K)\leq3^n\sum_jm(B_j)
<\frac{3^n}{\lambda}\sum_j\int_{B_j}|f|
\leq\frac{3^n}{\lambda}\|f\|_1.
$$

固定半径的平均对中心连续，故 $E_\lambda$ 开；也可由可测性及测度正则性从紧集逼近。取上确界得到弱 $(1,1)$ 估计。它不要求 $Mf$ 可积，只控制超过阈值的集合大小。

若 $p>1$，把 $f$ 分成 $|f|>\lambda/2$ 的大值部分和其余小值部分，后者极大值不超过 $\lambda/2$。因此

$$
m_n(\{x:Mf(x)>\lambda\})\leq\frac{2C_n}{\lambda}
\int_{|f|>\lambda/2}|f|.
$$

层积分恒等式 $\int h^p=p\int_0^\infty\lambda^{p-1}m_n(\{x:h(x)>\lambda\})d\lambda$ 由 Tonelli 得到。代入上界再换序，内部积分是 $\int_0^{2|f|}\lambda^{p-2}d\lambda$，得 $\|Mf\|_p\leq C_{n,p}\|f\|_p$。这是显式插值证明，不需要另外引用插值定理。

---

现在证明微分定理。对 $f\in L^1$，令 $\mathcal O f(x)$ 为 $r\downarrow0$ 时平均 $|f(y)-f(x)|$ 的上极限。选连续紧支撑 $g$ 在 $L^1$ 逼近 $f$；因为 $g$ 连续，

$$
\mathcal O f(x)\leq M(f-g)(x)+|f(x)-g(x)|.
$$

弱型估计与 Markov 给 $m_n(\{x:\mathcal O f(x)>\varepsilon\})\leq C\|f-g\|_1/\varepsilon$。逼近误差任意小，故此集合零测；再让 $\varepsilon$ 取可数个正有理数，得 $\mathcal O f=0$ 几乎处处。局部可积函数先截断到每个大球，在更小球中只看足够小半径，然后可数拼接即可。

所以几乎每点的局部平均趋于函数值。在一维，单侧区间平均的误差不超过相应对称区间误差的常数倍，因此 $F(x)=\int_a^xf$ 在这些点满足 $F'=f$。这完成 3.20 中基本定理所需的独立证明。

## 7.17 Calderón–Zygmund 分解

奇异积分对尖峰输入难以直接控制，我们希望把输入分成一个有界的好部分和局部均值为零的坏部分。取 $f\in L^1(\mathbb R^n)$、阈值 $\lambda>0$，在 dyadic 立方体中选平均 $|f|$ 超过 $\lambda$ 的极大立方体 $Q_j$。

这些极大块存在，因为体积足够大的祖先平均至多 $\|f\|_1/m_n(Q)$，最终低于阈值；dyadic 块彼此嵌套或不交，因此极大块两两不交。父块平均不超过 $\lambda$，所以每个坏块的平均至多 $2^n\lambda$。并且 $\sum_jm_n(Q_j)\leq\|f\|_1/\lambda$。

记 $f_{Q_j}=m_n(Q_j)^{-1}\int_{Q_j}f\,dm_n$。令 $g=f$ 在坏块外，而在 $Q_j$ 上取均值 $f_{Q_j}$；令 $b_j=(f-f_{Q_j})\mathbf1_{Q_j}$。块外每个包含该点的 dyadic 块平均都不超过阈值，Lebesgue 微分定理给 $|f|\leq\lambda$ 几乎处处。故 $|g|\leq2^n\lambda$，且 $\|g\|_1\leq\|f\|_1$。每个 $b_j$ 支撑在 $Q_j$、积分为零，并有 $\sum_j\|b_j\|_1\leq2\|f\|_1$。

于是 $f=g+\sum_jb_j$，好部分有 $L^2$ 界 $\|g\|_2^2\leq2^n\lambda\|f\|_1$，坏部分有局部化与均值零。均值零不是附带性质：它允许在积分核中减去一个常值，消去最危险的远场项。

## 7.18 奇异积分的弱型与强型估计

设线性 $T$ 在 $L^2$ 有界，离输入支撑有核表示。假设核大小 $|K(x,y)|\leq C|x-y|^{-n}$，并在 $|y-y'|\leq|x-y|/2$ 时满足 $|K(x,y)-K(x,y')|\leq C|y-y'|^\alpha/|x-y|^{n+\alpha}$，$\alpha>0$；交换两变量也有相应条件。下面证明它在 $1<p<\infty$ 有界。

先对 $f\in L^1\cap L^2$ 作上一节分解。好部分用 $L^2$ 有界性与 Chebyshev，得 $m_n(\{x:|Tg(x)|>\lambda/2\})\leq C\|f\|_1/\lambda$。把坏块放大固定维数倍，放大并的体积也不超过同一量级。

在放大块外，记 $c_j$ 为中心。均值零给

$$
Tb_j(x)=\int_{Q_j}[K(x,y)-K(x,c_j)]b_j(y)dy.
$$

核差分估计后对外部 $x$ 积分，径向积分 $\int_{r>c\ell_j}\ell_j^\alpha r^{-n-\alpha}dx$ 为统一常数，因此 $\int_{(Q_j^*)^c}|Tb_j|\leq C\|b_j\|_1$。先对有限坏块求和，再用 $L^2$ 连续性及 Fatou 取极限，得到坏部分在放大并之外的 $L^1$ 控制。再用 Markov，合并三项，得 $m_n(\{x:|Tf(x)|>\lambda\})\leq C\|f\|_1/\lambda$，即弱 $(1,1)$。

对 $1<p<2$，以阈值 $\lambda$ 把任意输入分大、小值部分：大部分用弱 $(1,1)$，小部分用强 $(2,2)$，得到

$$
m_n(\{x:|Tf(x)|>\lambda\})\leq\frac C\lambda\int_{|f|>\lambda}|f|
+\frac C{\lambda^2}\int_{|f|\leq\lambda}|f|^2.
$$

乘 $p\lambda^{p-1}$ 积分并用 Tonelli，第一项的内部积分为 $\int_0^{|f|}\lambda^{p-2}d\lambda$，第二项为 $\int_{|f|}^\infty\lambda^{p-3}d\lambda$，恰在 $1<p<2$ 有限，合起来给 $\|Tf\|_p\leq C_p\|f\|_p$。先对稠密的截断输入证明，再延拓即可。$p>2$ 对伴随应用刚证明的共轭指数结论，用对偶得到。两变量的核条件保证伴随也满足同样前提。

这段证明解释了为何仅有核的大小界不足：好部分需要 $L^2$ 前提，坏部分需要均值抵消和核光滑性。Hilbert 变换是这个框架的典型例子；端点 $p=1$ 只能得到弱型，不能由上述积分计算得到强型。

## 7.19 Littlewood–Paley 理论 ☆

选光滑 dyadic 频率分割 $\sum_{j\in\mathbb Z}\psi(2^{-j}\xi)=1$（$\xi\ne0$），定义 $\Delta_j$ 为相应乘子。在 Schwartz 函数上，对 $1<p<\infty$，

$$
\|f\|_p\asymp\left\|\left(\sum_j|\Delta_jf|^2\right)^{1/2}\right\|_p.
$$

一般分布的齐次理论有低频与多项式商的细节，不能忽略。$p=2$ 时频率近乎不交直接给出平方和；一般 $p$ 需奇异积分与随机化工具。它把函数大小转换为各频率尺度的能量。

## 7.20 小波与多分辨率分析 ☆

多分辨率分析用嵌套空间 $V_j\subset V_{j+1}$、尺度变换、交为零且并稠密描述分辨率。细节空间 $W_j=V_{j+1}\ominus V_j$ 给小波分解。

Haar 小波 $\psi=\mathbf1_{[0,1/2)}-\mathbf1_{[1/2,1)}$，其 $2^{j/2}\psi(2^jx-k)$ 构成 $L^2(\mathbb R)$ 正交基。一个区间两半的平均差就是细节系数：它测量局部变化，适合跳跃和局部特征。更光滑小波改善导数与压缩表现。

## 7.21 Gabor 变换与时频分析 ☆

给窗口 $g\in L^2$，短时 Fourier 变换 $V_gf(x,\xi)=\int f(t)\overline{g(t-x)}e^{-2\pi it\xi}dt$。窗口给位置定位，指数给频率定位。Plancherel 与 Fubini 给 Moyal 等式 $\|V_gf\|_{L^2(\mathbb R^2)}=\|f\|_2\|g\|_2$。

短窗口定位时间准确但频率分辨率较差，宽窗口反之，由不确定性原理限制。离散 Gabor 系是否构成框架依赖窗口与采样格，不是任意离散化都可稳定重构。

## 7.22 Shannon 采样定理

频谱带限使连续函数的全部信息压在有限频率区间内，因此有可能从等距样本重构。设 $f\in L^2(\mathbb R)$，$\widehat f$ 支持于 $[-B,B]$、$B>0$。有限区间上的 Hölder 给 $\widehat f\in L^1$，所以反演产生连续代表，采样点值具有意义。

下面将得到采样公式：

> 对上述带限函数的连续代表，有
>
> $$
> f(t)=\sum_{k\in\mathbb Z}f\left(\frac{k}{2B}\right)\operatorname{sinc}(2Bt-k),
> $$
>
> 其中 $\operatorname{sinc}u=\sin(\pi u)/(\pi u)$，在 $u=0$ 处取值 1。对称部分和在 $L^2$ 中及一致意义下收敛。

在 $L^2([-B,B])$ 中，$\phi_k(\xi)=(2B)^{-1/2}e^{-2\pi ik\xi/(2B)}$ 是正交基。其展开系数为

$$
\langle\widehat f,\phi_k\rangle
=\frac1{\sqrt{2B}}\int_{-B}^B\widehat f(\xi)e^{2\pi ik\xi/(2B)}d\xi
=\frac{f(k/(2B))}{\sqrt{2B}}.
$$

反演基向量得到 $\sqrt{2B}\operatorname{sinc}(2Bt-k)$，其中 $\operatorname{sinc}u=\sin(\pi u)/(\pi u)$、在 $u=0$ 处取值 1。因而

$$
f(t)=\sum_{k\in\mathbb Z}f\!\left(\frac{k}{2B}\right)\operatorname{sinc}(2Bt-k).
$$

正交展开及 Plancherel 给对称部分和在 $L^2$ 收敛。若频域余差为 $r_N$，点值误差不超过 $\int_{-B}^B|r_N|\leq\sqrt{2B}\|r_N\|_2$，这对所有 $t$ 一致，故也一致收敛。证明中，采样值是频域 Fourier 系数，sinc 是频域基的反演，这使公式不再是需要凭记忆接受的重构规则。

频谱若超出该带宽，不同频率会在同样格点上产生相同样本，即混叠。有限数据截断和非理想带限还会产生额外误差，不能从理想定理自动推断实际完美重构。

## 练习与提示

1. 计算 $\mathbf1_{[-a,a]}$ 的变换。答案：$\sin(2\pi a\xi)/(\pi\xi)$，零点处取 $2a$。
2. 用 Parseval 再算 $\sum1/k^2$，检查归一化常数。
3. 验证 $\widehat{f(\cdot-a)}=e^{-2\pi ia\cdot\xi}\widehat f$ 与调制的频移公式。
4. 用 Fejér 证明“连续周期函数全部 Fourier 系数为零则函数为零”。

[下一章：微分方程与变分分析](08-equations.md)
