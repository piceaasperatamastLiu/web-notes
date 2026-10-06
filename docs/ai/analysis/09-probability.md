# 第 9 章 概率与随机分析

概率论并没有另造一种积分，期望就是总质量为 1 的测度上的积分。新的问题来自信息：知道一部分事件以后，怎样重新计算平均？信息随时间增加时，怎样表达“当前已知的信息不能预见下一步的平均收益”？条件期望与鞅正是为回答这些问题而引入。

本章先把大数律与中心极限定理放在积分和收敛的语言中，再建立条件期望、鞅与停止。随后我们研究 Brown 运动：它路径连续，却有非零二次变差，普通链式法则因此不再成立。Itô 积分和 Itô 公式将这一额外变化明确写出来。

证明的主线是从独立增量开始，逐步理解可积控制、最大值估计和局部化。遇到停止或换测度时，必须确认极限仍保期望；局部鞅与真鞅的区别将在具体证明中出现，并在证明中说明其作用。

## 9.1 概率空间

> 概率空间 $(\Omega,\mathcal F,\mathbb P)$ 满足 $\mathbb P(\Omega)=1$。

这是第 3 章一般测度空间 $(X,\Sigma,\mu)$ 的特例：此处 $X=\Omega$、$\Sigma=\mathcal F$、$\mu=\mathbb P$。本章样本空间上的几乎处处都指 $\mathbb P$-几乎处处，也称几乎必然；实线上的密度与时间积分使用 $m_1$，不把 $dt$ 当作概率测度。随机变量的分布 $\mu_X$ 是实线上的推前测度，与样本空间上的 $\mathbb P$ 是不同的对象。

事件是可测集合，补事件概率为 $1-\mathbb P(A)$。可数并满足 $\mathbb P(\bigcup A_n)\leq\sum\mathbb P(A_n)$。

有限均匀样本空间中概率就是事件基数除以总基数；连续模型使用密度或其他概率测度。密度不是必须存在，Dirac 与 Cantor 分布都合法。

## 9.2 随机变量

> 随机变量 $X:\Omega\to\mathbb R$ 是可测函数，分布为推前 $\mu_X(A)=\mathbb P(X\in A)$。

分布函数 $F_X(t)=\mathbb P(X\leq t)$ 非减、右连续，并有两端极限 0、1。

正态分布记为 $\mathcal N(m,\sigma^2)$，第二个参数是方差；多维记为 $\mathcal N(m,\Sigma)$，其中 $\Sigma$ 是协方差矩阵。概率特征函数取 $\varphi_X(t)=\mathbb E e^{itX}$。若对分布测度采用第 7 章的负指数 Fourier 约定，则 $\varphi_X(t)=\widehat{\mu_X}(-t/(2\pi))$，两个公式的符号和 $2\pi$ 因子由此对应。

推前公式 $\mathbb E\phi(X)=\int\phi\,d\mu_X$（非负或可积时）可先对指示函数验证，再简单函数逼近。它说明可只用分布计算期望，无需知道样本空间细节。

## 9.3 期望与积分

期望是 Lebesgue 积分。$X\in L^1$ 时 $\mathbb EX$ 有限；$X\in L^2$ 时方差 $\operatorname{Var}X=\mathbb E|X-\mathbb EX|^2$。Markov 不等式：$X\geq0$ 时 $\mathbb P(X\geq a)\leq\mathbb EX/a$；对平方应用得 Chebyshev。

例如，公平 Bernoulli 变量 $X\in\{0,1\}$ 的均值 $1/2$、方差 $1/4$。独立重复 $n$ 次的样本均值方差为 $1/(4n)$，故偏离 $1/2$ 超过 $\varepsilon$ 的概率至多 $1/(4n\varepsilon^2)$。这预示大数律。

## 9.4 独立性

> 事件族独立指每个有限子族的交概率等于概率乘积。随机变量独立指其生成的 $\sigma$-代数独立，等价于有限联合分布为边缘分布乘积。

两两独立弱于联合独立。

独立可积变量的乘积可积且 $\mathbb E(XY)=\mathbb EX\mathbb EY$，由乘积分布和 Fubini 得到。零协方差不推出独立，例如对称连续 $X$ 与 $X^2$ 可不相关但显然相依。

## 9.5 强大数律

独立重复观测的平均应当趋于总体平均。若方差有限，依概率版本直接由 $\operatorname{Var}(\overline X_n)=\sigma^2/n$ 与 Chebyshev 得到。但路径上几乎必然收敛需要更强的论证。我们证明一般版本：

> 独立同分布且 $\mathbb E|X_1|<\infty$ 时，$n^{-1}\sum_{j\leq n}X_j\to\mathbb EX_1$ 几乎必然。

先准备独立均值零变量 $Y_j$ 的最大值估计。令 $S_k=\sum_{j\leq k}Y_j$，把首次满足 $|S_k|\geq a$ 的事件记为互不相交的 $A_k$。未来增量与 $A_k,S_k$ 独立且均值零，所以

$$
\mathbb E[S_N^2\mathbf1_{A_k}]
=\mathbb E[S_k^2\mathbf1_{A_k}]
+\mathbb E[(S_N-S_k)^2]\mathbb P(A_k)
\geq a^2\mathbb P(A_k).
$$

求和得到 Kolmogorov 最大不等式 $\mathbb P(\max_{k\leq N}|S_k|\geq a)\leq a^{-2}\sum_{j\leq N}\operatorname{Var}Y_j$。

因此若 $\sum_j\operatorname{Var}Y_j<\infty$，级数 $\sum_jY_j$ 几乎必然收敛。取 $n_k$ 使尾方差和小于 $2^{-3k}$，对从 $n_k$ 开始的任意有限尾和用最大不等式，再令尾端趋无穷，得到尾部最大偏离 $2^{-k}$ 的概率不超过 $2^{-k}$。这些概率可求和，Borel–Cantelli 第一引理使几乎每条路径最终所有这样的尾部都很小，故部分和 Cauchy。

回到一般可积 $X_j$，设 $X_j^*=X_j\mathbf1_{|X_j|\leq j}$。尾概率和 $\sum_j\mathbb P(|X_j|>j)\leq\mathbb E|X_1|$，所以截断只改变有限多项几乎必然。并且用 Tonelli 可估计

$$
\sum_j\frac{\operatorname{Var}X_j^*}{j^2}
\leq\mathbb E\left[|X_1|^2\sum_{j\geq\max(1,\lceil|X_1|\rceil)}\frac1{j^2}\right]
\leq C\mathbb E|X_1|<\infty.
$$

于是 $\sum_j(X_j^*-\mathbb EX_j^*)/j$ 几乎必然收敛。Kronecker 引理把它转为平均趋零：若 $b_n=\sum_{j\leq n}a_j/j\to b$，分部求和给 $n^{-1}\sum_{j\leq n}a_j=b_n-n^{-1}\sum_{j<n}b_j\to0$。控制收敛又给 $\mathbb EX_j^*\to\mathbb EX_1$，Cesàro 平均同样趋于该值。加回只影响有限项的截断，强大数律得证。

这里截断防止单个巨大观测破坏方差估计，最大不等式统一控制一整段部分和，Borel–Cantelli 把概率可求和转为路径结论。第一 Borel–Cantelli 本身由尾并概率不超过尾概率和立即证明，不要求独立。

## 9.6 中心极限定理

大数律说明平均误差趋零，中心极限定理说明其典型大小为 $n^{-1/2}$，并描述放大后的形状。

> 设独立同分布变量均值为 $m$、方差 $0<\sigma^2<\infty$，则 $\sqrt n(\overline X_n-m)/\sigma\Rightarrow \mathcal N(0,1)$。

令 $Y=(X-m)/\sigma$。其特征函数 $\varphi(t)=\mathbb Ee^{itY}$ 满足 $\varphi(0)=1$、$\varphi'(0)=i\mathbb EY=0$、$\varphi''(0)=-\mathbb EY^2=-1$。差商和二阶导数都由一阶或二阶可积矩控制，控制收敛使二阶导数连续。因此 Taylor 给 $\varphi(t)=1-t^2/2+o(t^2)$。独立性使标准化和的特征函数为

$$
\varphi(t/\sqrt n)^n\longrightarrow e^{-t^2/2},
$$

右侧是标准 Gaussian 的特征函数，由 Gaussian 积分可直接算出。

还需说明特征函数极限为何给分布极限。这里可以不用一般连续性定理的全部版本：各标准化和方差都为 1，Chebyshev 给统一尾界，所以分布紧。对任意子列，在所有有理数处分布函数作对角抽取，利用单调性定义右连续极限；统一尾界保证两端为 0 与 1。用连续点上下夹逼得到一个弱收敛子子列，有限区间分割再控制尾部可证明其有界连续测试函数积分收敛。极限分布的特征函数于是必为 $e^{-t^2/2}$。

特征函数唯一决定分布：把两分布各与任意小 Gaussian 卷积，频域函数成为可积的“特征函数乘 Gaussian”，反演给相同的平滑密度；Gaussian 核趋于点质量后，对连续紧支撑测试函数取极限，原分布相同。因此每个子子列极限只能为标准 Gaussian。若整列不弱收敛，就能挑一个对某个测试函数始终偏离的子列，与刚得到的子子列收敛矛盾。由此完成证明。

此定理描述分布收敛，不是说每条样本路径上的放大误差收敛到一个 Gaussian 随机变量；这两类收敛必须区分。

## 9.7 条件期望

给定信息 $\mathcal G\subset\mathcal F$，我们希望用 $\mathcal G$-可测变量近似可积 $X$，并保证在每个已知事件上的总平均不变。

> 因此定义 $Y=\mathbb E[X\mid\mathcal G]$ 满足 $Y$ 在 $\mathcal G$ 可测、可积，且 $\int_A Y\,d\mathbb P=\int_A X\,d\mathbb P$ 对每个 $A\in\mathcal G$ 成立。

先对 $X\geq0$，在 $\mathcal G$ 上定义有限测度 $\nu(A)=\mathbb E[X\mathbf1_A]$。它对概率测度绝对连续，3.19 给密度 $Y\geq0$，并有 $\mathbb EY=\nu(\Omega)<\infty$。一般 $X$ 对正负部分分别构造后相减。若两个版本都满足条件，在事件 $\{Y_1>Y_2+1/k\}\in\mathcal G$ 积分比较，得该事件零测；交换两者，得到几乎处处唯一。

塔式性质同样来自定义：若 $\mathcal H\subset\mathcal G$，两次条件化后的函数在 $\mathcal H$ 可测，且对每个 $A\in\mathcal H$ 其积分等于 $\int_AX$，唯一性给 $\mathbb E[\mathbb E[X\mid\mathcal G]\mid\mathcal H]=\mathbb E[X\mid\mathcal H]$。有界已知因子可提出，先对指标函数，再简单逼近即可。

还有一个将反复使用的估计：若 $\phi:\mathbb R\to\mathbb R$ 为有限凸函数，$X$ 与 $\phi(X)$ 可积，则条件 Jensen 不等式给 $\phi(Y)\leq\mathbb E[\phi(X)\mid\mathcal G]$。证明先在每个有理点 $r$ 选一条支撑直线 $L_r(x)=\phi(r)+c_r(x-r)$。凸性使左侧割线斜率不超过右侧割线斜率，取二者之间的 $c_r$，便有 $L_r\leq\phi$。有理点稠密、凸函数连续，且这些斜率在每个内部紧区间有界，所以 $\phi(x)=\sup_{r\in\mathbb Q}L_r(x)$。

条件期望保持非负性，这是正密度构造的直接结果；故对每个 $r$，$L_r(Y)=\mathbb E[L_r(X)\mid\mathcal G]\leq\mathbb E[\phi(X)\mid\mathcal G]$。可数取上确界即可，避免了不可数个零测例外的并。这也证明 $\phi(Y)$ 可积：上方由可积的条件期望控制，下方由一条可积的支撑直线控制。取 $\phi(x)=|x|$ 得条件期望的 $L^1$ 压缩性；取 $\phi(x)=x^2$ 得 $X\in L^2$ 时 $Y\in L^2$ 且 $\mathbb EY^2\leq\mathbb EX^2$。对平凡信息使用同一证明，就得到通常 Jensen 不等式。

若信息只把样本空间分成有限块，就在每块取条件平均。例如公平骰子只告诉奇偶，则条件期望在奇数事件为 3、偶数事件为 4。$L^2$ 时，现在已知 $Y\in L^2$；对所有有界 $\mathcal G$-可测测试函数有 $\mathbb E[(X-Y)Z]=0$，再用截断稠密延拓到该 $L^2$ 子空间，得到正交投影解释。这把“知道一部分信息后的最佳均方预测”与 5.15 的投影连在一起。

## 9.8 鞅与最大值控制

滤过 $\mathcal F_n$ 表示逐步增加的信息。

> 适应且可积的 $M_n$ 若满足 $\mathbb E[M_{n+1}\mid\mathcal F_n]=M_n$，就称为**鞅**。

未来可以随机起伏，但在当前信息下没有平均漂移。独立均值零增量的部分和是最直接的例子。把等号换成 $\geq$ 或 $\leq$ 分别得到次鞅与上鞅。

条件 Jensen 表明 $|M_n|$、可积时的 $M_n^2$ 都是次鞅。我们推导以后构造随机积分需要的 Doob $L^2$ 最大不等式。设 $M_N\in L^2$，对有限时段记 $M^*=\max_{k\leq N}|M_k|$；按首次超过 $\lambda$ 分解事件，条件 Jensen 与鞅性给

$$
\lambda\mathbb P(M^*>\lambda)
\leq\mathbb E[|M_N|\mathbf1_{M^*>\lambda}].
$$

乘 2 后对 $\lambda$ 积分，用 Tonelli 得 $\mathbb E(M^*)^2\leq2\mathbb E(M^*|M_N|)$。Cauchy–Schwarz 后相除（先截断最大值再取极限）得到 $\mathbb E(M^*)^2\leq4\mathbb E|M_N|^2$。对连续鞅在逐渐加密的有限时间网格使用此式，再由路径连续性与单调收敛，得到连续时间版本。

与单时刻的方差界相比，这个估计控制了整条路径的最大误差，所以能保证随机积分和随机迭代在路径空间中收敛。

## 9.9 停时

> 随机时刻 $\tau$ 若 $\{\tau\leq n\}\in\mathcal F_n$，称停时：到时刻 $n$ 能判断是否已经停止。

首次达到阈值是停时；最终最大值出现的时刻通常不是，因为需看未来。

停止过程 $M_{n\wedge\tau}$ 在可积条件下仍为鞅。这里有限 $n$ 时只需展开有限个已知信息决定的增量，条件期望为零。对无界 $\tau$ 取极限需要额外条件，不能自动推广。

## 9.10 鞅收敛

设次鞅 $M_n$ 满足 $\sup_n\mathbb E|M_n|\leq C$。下面证明几乎必然收敛，并在证明以后讨论 $L^1$ 收敛所需的条件。

> 若次鞅 $(M_n)$ 满足 $\sup_n\mathbb E|M_n|<\infty$，则它几乎必然收敛到某个有限且可积的 $M_\infty$。若 $(M_n)$ 一致可积，则还在 $L^1$ 中收敛。

固定 $a<b$，当过程降到 $a$ 以下便“持有一份”，升到 $b$ 以上便“卖出”，如此重复。持有状态 $H_k\in\{0,1\}$ 由时刻 $k$ 信息决定，记到 $N$ 的完成上穿数为 $U_N$、增量和为 $G_N=\sum_{k<N}H_k(M_{k+1}-M_k)$。每次完成收益至少 $b-a$，未完成的最后一次损失不超过 $(M_N-a)^-$，故

$$
G_N\geq(b-a)U_N-(M_N-a)^-.
$$

次鞅性使任意非负可预测持有策略的平均增量非负；对互补策略 $1-H_k$ 使用它，得到 $\mathbb EG_N\leq\mathbb E(M_N-M_0)$。因此

$$
(b-a)\mathbb EU_N\leq\mathbb E(M_N-a)^++a-\mathbb EM_0
\leq C+2|a|+\mathbb E|M_0|.
$$

令 $N\to\infty$，每个有理 $a<b$ 的总上穿数几乎必然有限。若一条路径下极限小于上极限，其中能放一个有理区间，必有无穷上穿，矛盾。因此几乎每条路径有扩展实极限。Fatou 给极限绝对值期望不超过 $C$，排除无穷，得到可积 $M_\infty$。

单有上述界不保证 $L^1$ 收敛。如果族一致可积，即 $\sup_n\mathbb E[|M_n|\mathbf1_{|M_n|>K}]\to0$，则可以把 $|M_n-M_\infty|$ 分成两者都不超过 $K$ 的部分和尾部。前者由控制收敛趋零，后者由一致可积性及 Fatou 得任意小的统一界，因此 $L^1$ 收敛。若过程为鞅，有限时刻关系 $\mathbb E[M_N\mid\mathcal F_n]=M_n$ 在 $L^1$ 极限下保持，得到 $M_n=\mathbb E[M_\infty\mid\mathcal F_n]$。

所以，上穿估计控制路径振荡，一致可积性控制积分质量；这两件事分别对应几乎必然和 $L^1$ 收敛。某个 $p>1$ 的统一 $L^p$ 界可控制尾部为 $CK^{1-p}$，因此是常用充分条件。

## 9.11 可选停止

若离散鞅在有界停时 $\tau\leq N$ 停止，路径恒等式给

$$
M_\tau=M_0+\sum_{j=0}^{N-1}\mathbf1_{\{\tau>j\}}(M_{j+1}-M_j).
$$

事件 $\{\tau>j\}$ 在 $\mathcal F_j$ 中，条件期望使每个增量项平均为零，所以 $\mathbb EM_\tau=\mathbb EM_0$。证明只涉及有限求和，没有隐藏极限。

若 $\tau$ 几乎必然有限但无统一界，先对 $n\wedge\tau$ 用刚才的公式。停止值几乎处处趋于 $M_\tau$；若停止族一致可积，9.10 的截断论证给 $L^1$ 收敛，于是期望等式保持。这说明可选停止中额外条件的用途正是交换无界等待极限与期望。

简单对称随机游走从 0 出发，首次达到 1 的停时几乎必然有限，但停止值恒为 1，而初均值为 0。它的停止族不一致可积：少数尚未击中 1 的路径承担越来越大的负值，截断极限中这部分质量丢失。因此“停时有限几乎必然”不足以保持平均。

## 9.12 随机过程

随机过程是一族随机变量 $X_t$。有限维分布描述有限时刻的联合规律，路径正则性描述 $t\mapsto X_t(\omega)$。相同有限维分布不自动意味着给定版本的路径连续，需要选适当修改。

连续时间滤过通常采用通常条件：完备且右连续。过程适应指每时刻变量 $\mathcal F_t$-可测；Itô 积分还需要可预测或相应渐进可测条件，不能只写“每时刻可测”便结束。

## 9.13 Markov 性

Markov 性指给定当前状态，未来条件分布不再依赖更早历史。时间齐次转移算子 $P_tf(x)=\mathbb E_xf(X_t)$ 满足 $P_{t+s}=P_tP_s$。

强 Markov 性把确定时间推广为停时，需要额外条件或定理。Brown 运动与适当正则的扩散具有该性质，任意 Markov 过程不能不加条件就使用强版本。

## 9.14 Brown 运动的一个实际构造

> 标准 Brown 运动要求起点为零、路径连续、独立平稳增量，且 $B_t-B_s\sim \mathcal N(0,t-s)$。

这些要求是否能同时满足，并不是定义本身能保证的。下面用可数个独立标准正态变量构造它。

先在 $[0,1]$ 工作。取常函数 1 和 dyadic Haar 函数 $h_{j,k}$：在第 $j$ 层第 $k$ 个区间的左半取 $2^{j/2}$，右半取 $-2^{j/2}$，区间外为零。它们正交归一；到有限层张成全部相应 dyadic 阶梯函数，连续函数可被这些阶梯函数一致逼近，所以在 $L^2([0,1])$ 构成基。令 $s_{j,k}(t)=\int_0^th_{j,k}(r)dr$，它是高度 $2^{-j/2-1}$ 的帐篷函数。

在可数乘积概率空间上取独立标准正态 $Z_{-1},Z_{j,k}$，定义

$$
B_t=Z_{-1}t+\sum_{j\geq0}\sum_{k=0}^{2^j-1}Z_{j,k}s_{j,k}(t).
$$

同一层帐篷的支撑内部不交，因此该层最大绝对值不超过 $2^{-j/2-1}\max_k|Z_{j,k}|$。Gaussian 尾界与并集界给 $\mathbb P(\max_k|Z_{j,k}|>j)\leq2^{j+1}e^{-j^2/2}$，其和有限。Borel–Cantelli 使几乎每条路径最终 $\max_k|Z_{j,k}|\leq j$；$\sum_jj2^{-j/2}<\infty$，所以级数几乎必然一致收敛，极限路径连续。

固定时刻的有限部分和是联合 Gaussian，系数平方可求和，由 $L^2$ 收敛及特征函数极限得到联合 Gaussian 极限。Parseval 把协方差写为

$$
\mathbb E(B_sB_t)=st+\sum_{j,k}s_{j,k}(s)s_{j,k}(t)
=\langle\mathbf1_{[0,s]},\mathbf1_{[0,t]}\rangle=\min(s,t).
$$

于是增量方差为 $t-s$；不交区间增量的协方差为零，联合 Gaussian 的特征函数因此分解为乘积，给独立性。我们已经验证全部 Brown 要求。把独立的 $[0,1]$ 副本依次拼接，可得到 $[0,\infty)$ 上的过程。这里可数独立变量的存在使用可数乘积概率测度的标准构造；不需要未经证明地假定一个连续 Gaussian 路径过程已经存在。

后续取通常增广的自然滤过，或任何使 $B$ 仍有独立未来增量的通常滤过。$B_t$ 与 $B_t^2-t$ 是鞅，多维 Brown 用独立坐标构成，生成元为 $\Delta/2$。提前把未来信息加入滤过会破坏这些性质，所以滤过也是模型的一部分。

## 9.15 连续轨道与二次变差

在 $[0,T]$ 的等距分割上，$Q_n=\sum(B_{t_{j+1}}-B_{t_j})^2$ 的均值为 $T$，方差为 $2T^2/n$，故 $Q_n\to T$ 于 $L^2$。dyadic 分割的异常概率可求和，因此沿该列还几乎必然收敛。Brown 的二次变差记 $[B]_t=t$。

连续有限变差函数的同类平方增量和趋零，因为不超过最大增量乘总变差；Brown 则非零，所以路径几乎必然不具有限变差。Brown 路径几乎必然处处不可微是更强的结论，不能仅由二次变差一步推出。

## 9.16 Itô 积分的构造

Brown 路径不具有限变差，普通 Stieltjes 路径积分不能直接使用。我们改用概率空间中的 $L^2$ 极限。固定一个满足通常条件的滤过，$B$ 是相对它的 Brown 运动。对简单可预测过程 $H=\sum H_j\mathbf1_{(t_j,t_{j+1}]}$，其中 $H_j$ 在左端信息 $\mathcal F_{t_j}$ 可测，先定义

$$
\int_0^TH\,dB=\sum_jH_j(B_{t_{j+1}}-B_{t_j}).
$$

不同项的交叉期望为零：对较晚增量先条件于其左端信息，先前项与其系数均已知，增量条件均值为零。对角项由增量独立与方差等于时间长度得到

$$
\mathbb E\left|\int_0^TH\,dB\right|^2
=\sum_j\mathbb E|H_j|^2(t_{j+1}-t_j)
=\mathbb E\int_0^T|H|^2dt.
$$

这是 Itô 等距。以简单可预测矩形生成可预测 $\sigma$-代数，简单函数逼近和截断说明上述过程在可预测 $L^2(\Omega\times[0,T])$ 中稠密。任意平方可积可预测 $H$ 取逼近 $H_n$，等距使积分 Cauchy，完备性给极限；等距也证明极限与逼近选择无关。

简单积分过程是连续平方可积鞅。Doob 最大不等式进一步给积分过程差的期望最大平方不超过 $4\mathbb E\int|H_n-H_m|^2$。因此取足够快的子列，在整个时间区间几乎必然一致收敛到连续过程；条件期望在 $L^2$ 连续，极限仍为鞅。若只有局部平方可积，则先在积分能量达到阈值的停时前构造，再拼接，得到连续局部鞅。

左端系数是构造的实质。如果系数提前看到未来增量，交叉项和对角项的独立性论证会失败；可预测性不能被“每个时刻都可测”替代。

## 9.17 Itô 公式为什么多出二阶项

普通链式法则会忽略 Brown 路径的二次变差。相应的正确结论是：

> 对 $f\in C^2(\mathbb R)$ 和标准 Brown 运动，几乎必然对所有 $t\geq0$ 有
>
> $$
> f(B_t)-f(B_0)=\int_0^tf'(B_s)dB_s+\frac12\int_0^tf''(B_s)ds.
> $$
>
> 未加全局有界条件时，随机积分按局部化解释。

先对 $f\in C^3(\mathbb R)$、前三阶导数有界证明 Brown 版本。将 $[0,T]$ 等分，在每段对 $f(B_{t_{j+1}})-f(B_{t_j})$ 作 Taylor 展开：

$$
\Delta f_j=f'(B_{t_j})\Delta B_j+\frac12f''(B_{t_j})(\Delta B_j)^2+R_j,\qquad
|R_j|\leq C|\Delta B_j|^3.
$$

Gaussian 三阶绝对矩给 $\mathbb E\sum|R_j|\leq C N(T/N)^{3/2}\to0$。一阶和由 Itô 等距趋于 $\int_0^Tf'(B_t)dB_t$，因为 Brown 连续性与有界控制使左端阶梯系数在 $L^2(\Omega\times[0,T])$ 逼近 $f'(B_t)$。

二阶和不能略掉。拆成时间和与中心化平方增量和；后者各项是均值零的鞅差，正交给

$$
\mathbb E\left|\sum_jf''(B_{t_j})[(\Delta B_j)^2-\Delta t]\right|^2
\leq2\|f''\|_\infty^2\sum_j(\Delta t)^2\longrightarrow0.
$$

时间和由路径连续性趋于 $\int_0^Tf''(B_t)dt$。于是得到 $f(B_T)-f(B_0)=\int f'(B)dB+\frac12\int f''(B)dt$。用光滑化在紧集上一致逼近 $f,f',f''$，再以离开大区间的停时局部化，可把条件降到一般 $C^2$。先对有理 $T$ 成立，再由连续性得到所有时刻同时成立。

---

对 $dX=b_tdt+\sigma_tdB_t$，同一展开的漂移平方和和漂移交叉项趋零，鞅平方和则趋于 $\int\sigma_t^2dt$。这一变化可先对简单可预测 $\sigma$ 直接使用刚才的增量计算，再用等距逼近一般局部平方可积系数：平方和之差由 Cauchy–Schwarz 控制，其误差因子的期望为 $\mathbb E\int|\sigma-\sigma_n|^2$，因而趋零。有界权重 $f''$ 可一起控制，局部化去掉有界假设。加入时间变量的一阶展开，就得到 $f\in C^{1,2}$ 时

$$
df(t,X_t)=\left(f_t+b_tf_x+\tfrac12\sigma_t^2f_{xx}\right)dt
+\sigma_tf_xdB_t.
$$

取 $X=B,f(x)=x^2$，得 $B_T^2=2\int_0^TB_tdB_t+T$，所以 $\int B\,dB=(B_T^2-T)/2$。它的均值为零，与积分鞅性一致；若沿用普通链式法则，会少掉恰好补偿方差的 $T$。

## 9.18 随机 Picard 迭代与 SDE

考虑 $X_t=X_0+\int_0^tb(s,X_s)ds+\int_0^t\sigma(s,X_s)dB_s$。

> 设确定性系数可测，对状态全局 Lipschitz 且线性增长，常数在每个有限时间区间统一；初值 $\mathcal F_0$-可测且平方可积。我们证明唯一强解存在。

从常值过程 $X^{(0)}=X_0$ 开始，把上一轮代入右端定义 $X^{(k+1)}$。线性增长保证各轮在有限区间平方可积。记 $e_k(t)=\mathbb E\sup_{s\leq t}|X_s^{(k+1)}-X_s^{(k)}|^2$。漂移用 Cauchy–Schwarz，随机项用 Doob 与 Itô 等距，再用 Lipschitz 条件，得到 $e_{k+1}(t)\leq C_T\int_0^te_k(s)ds$。首项有有限统一界 $D_T$，递归给

$$
e_k(T)\leq D_T\frac{(C_TT)^k}{k!}.
$$

这些界的平方根可求和，所以迭代在 $L^2$ 最大范数下 Cauchy。取快速子列，得到路径几乎必然一致极限，因此极限连续且适应；也在最大范数下趋于该极限。系数的 Lipschitz 性、确定积分估计和 Itô 等距允许在两积分中取极限，所得 $X$ 满足方程。

对任意两解之差重复同一估计，Gronwall 给差为零，即路径唯一性。线性增长还给 $\mathbb E\sup_{s\leq T}|X_s|^2\leq C_T(1+\mathbb E|X_0|^2)$；任意有限 $T$ 都可进行构造，唯一性保证区间间相容，故解不在有限时间爆破。只有局部 Lipschitz 时则先在离开有界状态区的停时前构造，不能自动得到全球解。

例如 $dX=aXdt+\sigma XdB$，其中 $a,\sigma$ 为实常数。对指数函数用 Itô 验证 $X_t=X_0\exp((a-\sigma^2/2)t+\sigma B_t)$。修正 $-\sigma^2/2$ 来自二阶项。漂移系数使用 $a$，与分布测度 $\mu_X$ 区分。这里使用给定的 Brown 和初始概率空间，故称强解；允许一同构造概率空间的弱解是另一种存在性问题。

## 9.19 Girsanov

改变路径的平均漂移，可以通过改变概率测度实现。先考虑一个足以完整证明的版本：

> 在 $[0,T]$ 上，设 $\theta$ 有界且可预测，令
>
> $$
> Z_t=\exp\left(\int_0^t\theta_s dB_s-\frac12\int_0^t\theta_s^2ds\right).
> $$
>
> 则 $\mathbb EZ_T=1$，因而 $d\mathbb Q=Z_Td\mathbb P$ 定义概率测度。在 $\mathbb Q$ 下，$\widetilde B_t=B_t-\int_0^t\theta_sds$ 是相对于原滤过的 Brown 运动。

在有限区间，先对有界可预测 $\theta$ 完整证明。定义 $Z_t=\exp(\int_0^t\theta\,dB-\frac12\int_0^t\theta^2ds)$。Itô 给 $dZ=Z\theta\,dB$，所以它先是正局部鞅。停止到 $Z$ 达到大阈值，再对 $Z^2$ 用 Itô，得到 $\mathbb EZ_{t\wedge\tau_n}^2\leq1+C\int_0^t\mathbb EZ_{s\wedge\tau_n}^2ds$，Gronwall 给统一 $L^2$ 界。连续路径在有限区间有界，使 $\tau_n$ 最终超过终点；一致可积性因而保期望，得 $\mathbb EZ_T=1$。于是 $d\mathbb Q=Z_Td\mathbb P$ 确实是概率测度。

令 $\widetilde B_t=B_t-\int_0^t\theta_sds$。要证明它在新测度下是 Brown，固定 $s$ 和实 $\lambda$，对

$$
Y_t=Z_t\exp\left(i\lambda(\widetilde B_t-\widetilde B_s)+\frac{\lambda^2}2(t-s)\right),\quad t\geq s
$$

用乘积 Itô，漂移项恰相消，得 $dY=Y(\theta+i\lambda)dB$。有界 $\theta$ 与刚才的 $L^2$ 界保证它是真鞅。因此条件于 $\mathcal F_s$，再用密度的 Bayes 公式，得到

$$
\mathbb E_{\mathbb Q}\left[e^{i\lambda(\widetilde B_t-\widetilde B_s)}\mid\mathcal F_s\right]
=e^{-\lambda^2(t-s)/2}.
$$

这是不依赖过去的正态增量特征函数；由特征函数唯一性，增量独立于 $\mathcal F_s$ 且为 $\mathcal N(0,t-s)$。路径连续且起点为零，所以 $\widetilde B$ 是 $\mathbb Q$-Brown，证明完成。把 $dB=d\widetilde B+\theta dt$ 代回方程，可核对漂移的符号。

一般可预测 $\theta$ 可用 Novikov 条件 $\mathbb E\exp(\frac12\int_0^T\theta^2dt)<\infty$ 代替有界性。此时额外困难是证明指数局部鞅一致可积，称 Novikov 判据；上面的直接 $L^2$ 论证不再足够。本节的完整证明覆盖有界版本，一般判据作为进阶结论保留，不能把“正局部鞅”未经论证就当概率密度。

## 9.20 Feynman–Kac

> 设扩散生成元 $L=b\cdot\nabla+\frac12\operatorname{tr}(\sigma\sigma^{\mathsf T}D^2)$，解不爆破；$V$ 有界连续，终值 $g$ 有界，且终值问题 $u_t+Lu-Vu=0$、$u(T,x)=g(x)$ 有有界经典解 $u\in C^{1,2}$（在终点连续）。我们证明
>
> $$
> u(t,x)=\mathbb E_{t,x}\left[e^{-\int_t^TV(X_s)ds}g(X_T)\right].
> $$

令 $A_s=\exp(-\int_t^sV(X_r)dr)$。有限变差因子满足 $dA_s=-V(X_s)A_sds$。乘积 Itô 给 $d(A_su(s,X_s))$ 的漂移为 $A_s(u_t+Lu-Vu)ds=0$，只剩随机积分。

在离开大球且积分能量达到大阈值的停时前，随机积分平方可积、期望为零，故 $u(t,x)=\mathbb E[A_{T\wedge\tau_n}u(T\wedge\tau_n,X_{T\wedge\tau_n})]$。非爆破及局部正则性使停止最终趋于 $T$，而 $|A_su(s,X_s)|\leq e^{T\|V\|_\infty}\|u\|_\infty$，控制收敛去掉停止，终值条件给公式。

这个证明同时给有界经典解的唯一性，因为任何两个解都等于同一右端。反过来，概率表达式是不是经典解，需要另外的正则性定理，例如光滑统一椭圆系数与适当光滑终值；表示本身不能替代这一步。标准 Brown 的生成元是 $\Delta/2$，因此在与热方程比较时必须保留这个系数。

## 9.21 随机分析应用 △

Monte Carlo 用独立样本均值近似 $\mathbb E\phi(X)$，有限方差下标准差为 $\sigma/\sqrt N$，CLT 给渐近置信近似。提高精度 10 倍通常需样本量 100 倍，故方差缩减具有实际意义。

扩散采样、随机控制、带噪优化都使用 SDE，但离散算法必须另查稳定性与离散误差。连续公式正确不等于任意步长模拟正确；9.18 的显式解是检验模拟的基准。

## 练习与提示

1. 证明若 $X$ 与 $\mathcal G$ 独立，则 $\mathbb E[X\mid\mathcal G]=\mathbb EX$。
2. 计算 $\mathbb E(B_T^2-T)^2$。答案 $2T^2$，可用 Gaussian 四阶矩。
3. 对 $f(x)=e^x$ 写 Itô 公式，解释 $e^{B_t-t/2}$ 为什么在有限时段为鞅。
4. 从几何 Brown 显式解计算均值，答案 $\mathbb EX_t=X_0e^{at}$（固定初值）。

[下一章：现代专题与交叉分支](10-topics.md)
