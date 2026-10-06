# 第 11 章 复几何、层与 Riemann 曲面

光滑坐标允许任意光滑换图，复坐标只允许全纯换图。这个限制显著增强了局部到整体的约束，也使层与上同调成为自然工具。

## 11.1 复流形与复结构 ★

复 $n$ 维流形的图取值于 $\mathbb C^n$，换图全纯，实维数为 $2n$。乘以 $i$ 给出切丛上的 $J$，满足 $J^2=-I$。一般这样的几乎复结构未必来自全纯图；其可积性由 Newlander–Nirenberg 定理刻画。

复化切丛分为 $T^{1,0}\oplus T^{0,1}$，形式因而有双次数。复流形上
$d=\partial+\bar\partial$，
$\partial^2=\bar\partial^2=\partial\bar\partial+\bar\partial\partial=0$。

## 11.2 Dolbeault 上同调

定义
$H^{p,q}_{\bar\partial}(M)=\ker(\bar\partial:\Omega^{p,q}\to\Omega^{p,q+1})/\operatorname{im}\bar\partial$。
零次条件 $\bar\partial f=0$ 正是全纯性。局部 $\bar\partial$ 引理与光滑形式层的单位分解性质证明

$$
H^q(M,\Omega^p_{\mathrm{hol}})\cong H^{p,q}_{\bar\partial}(M).
$$

这是 Dolbeault 定理。左边为层上同调，右边由全局形式复形计算；与奇异上同调 $H^k(M;A)$ 的记号不同。

## 11.3 Hermitian 与 Kähler 度量 ★

与 $J$ 相容的实度量满足 $g(JX,JY)=g(X,Y)$，定义
$\omega(X,Y)=g(JX,Y)$。若 $d\omega=0$，则为 Kähler 度量。标准 $\mathbb C^n$ 中
$\omega=(i/2)\sum dz^j\wedge d\overline z^j$，即 $\sum dx^j\wedge dy^j$。

紧 Kähler 流形上，Kähler 恒等式给出 $\Delta_{\mathrm H}=2\Delta_{\bar\partial}$，从而
$H^k(M;\mathbb C)=\bigoplus_{p+q=k}H^{p,q}_{\bar\partial}(M)$，
且 $\overline{H^{p,q}}\cong H^{q,p}$。这些结论需要 Kähler 条件；一般紧复流形不能照搬。

## 11.4 Riemann 曲面与典型例子

复一维流形称为 Riemann 曲面。$\mathbb{CP}^1$ 是球面，$\mathbb C/\Lambda$ 是复环面，其中 $\Lambda$ 是秩 $2$ 格。闭可定向曲面的属统一记为 $\gamma$，不用已经表示度量的 $g$。

紧连通 Riemann 曲面上的全纯函数都是常数：$|f|$ 取到最大值，最大模原理使 $f$ 局部常值，再由连通性推广。非恒定亚纯函数却可以存在，因其允许极点。

一致化定理说单连通 Riemann 曲面为球面、复平面或单位圆盘之一。它是深定理；在闭曲面上分别对应属 $0,1,\ge2$ 的几何模型。

## 11.5 层：把局部数据正确拼起来 ★

层 $\mathcal F$ 给每个开集赋予数据 $\mathcal F(U)$ 与限制映射，要求相同局部数据能唯一拼接。全纯函数、光滑函数与局部常值函数分别组成层。芽把“在足够小邻域上一样”作为等价关系，点 $x$ 的茎记为 $\mathcal F_x$。

局部常值层的截面与常值预层不同：不连通开集上，局部常值函数可以在各分支取不同值。这个例子解释了为什么层化不是多余步骤。

## 11.6 Čech 上同调与拼接障碍

给覆盖 $\{U_i\}$，零余链是各 $U_i$ 的截面，一余链是各交集 $U_i\cap U_j$ 的截面。余边界用交替限制相加。一个一余循环可描述局部对象之间相容的差异；若它是余边界，则能通过调整局部选择消除差异。

光滑函数层有单位分解，可构造正次数 Čech 余链的收缩，因此这类层称为细层并在流形上无高阶上同调。全纯函数不能使用光滑单位分解而仍保持全纯，这正是复几何中上同调常常非零的原因。

一般层上同调由导出函子定义；Čech 计算与其相同需要适当的无上同调覆盖或取覆盖极限，不能对任意固定覆盖无条件宣称相同。de Rham 与 Dolbeault 复形都是用无上同调层解消局部数据的例子。

## 11.7 除子、线丛与 Serre 对偶

曲面上的除子是有限和 $D=\sum_p n_p[p]$，次数为 $\deg D=\sum n_p$。$\mathcal O(D)$ 的截面是满足 $(f)+D\ge0$ 的亚纯函数；其整体截面维数记为 $\ell(D)$。典范线丛 $K_M$ 是全纯一阶形式丛，典范除子写作 $K$。

紧曲面上的 Serre 对偶为

$$
H^1(M,L)\cong H^0(M,K_M\otimes L^{-1})^*.
$$

配对通过 Dolbeault 代表的外积积分实现，是复双线性配对，不额外插入复共轭。

## 11.8 Riemann–Roch 与射影直线上的计算 ★

> 对紧连通属 $\gamma$ 的 Riemann 曲面，
>
> $$
> \ell(D)-\ell(K-D)=\deg D+1-\gamma.
> $$

一般定理的证明需要对偶和上同调 Euler 特征，本节作为明确的结构定理使用。它把允许的极点数量与亚纯函数的自由度联系起来，而不是直接断言 $\ell(D)=\deg D+1-\gamma$。

在 $\mathbb{CP}^1$ 上可完整验证。把 $D=d[\infty]$，$d\ge0$ 时截面恰为次数至多 $d$ 的多项式，故 $\ell(D)=d+1$；$d<0$ 时为零。坐标 $w=1/z$ 给出 $dz=-w^{-2}dw$，所以 $K=-2[\infty]$。于是

$$
\max(d+1,0)-\max(-d-1,0)=d+1,
$$

正是属零的公式。取 $D=0$，一般公式也给出全纯一阶形式空间维数为 $\gamma$。

## 11.9 Hodge 结构与进一步学习 ☆

紧 Kähler 流形的整系数上同调模去挠部分，加上复化后的双分次分解，形成纯 Hodge 结构。非紧或奇异代数簇通常需要混合 Hodge 结构。学习它之前，应先理解环面上的 $dz$ 与 $d\overline z$ 如何把一阶复上同调分成两部分。

## 练习

1. 在 $\mathbb C$ 上把 $df$ 分成 $\partial f,\bar\partial f$。
2. 求复环面上所有全纯一阶形式，并计算其两个基本周期。
3. 求 $\mathbb{CP}^1$ 上允许在 $0$ 有二阶极点、在 $\infty$ 有一阶极点的函数空间维数。
4. 解释为什么全纯函数层不接受任意光滑单位分解。
