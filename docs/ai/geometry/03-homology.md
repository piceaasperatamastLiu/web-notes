# 第 3 章 同调与上同调

基本群擅长识别环路，却不直接描述高维洞。我们先把几何对象变成可以相加的链，再把“没有边界”和“本身是边界”区别开来。这一步让拓扑问题进入线性代数和模论。

## 3.1 链复形与同调 ★

> 一个链复形是 Abel 群与同态组成的序列
>
> $$
> \cdots\longrightarrow C_{n+1}\xrightarrow{\partial_{n+1}}
> C_n\xrightarrow{\partial_n}C_{n-1}\longrightarrow\cdots,
> \qquad \partial_n\circ\partial_{n+1}=0.
> $$
>
> 其同调为 $H_n(C)=\ker\partial_n/\operatorname{im}\partial_{n+1}$。

核中的元素叫循环，像中的元素叫边界。条件 $\partial^2=0$ 保证边界必为循环；同调判断一个循环能否由下一维的链填满。注意同调不是核本身，也不是整个链群的商。

## 3.2 单纯同调

给单纯复形的顶点排一个次序，以有向 $n$ 维单形为自由 Abel 群的基，定义

$$
\partial[v_0,\ldots,v_n]
=\sum_{i=0}^n(-1)^i[v_0,\ldots,\widehat v_i,\ldots,v_n].
$$

交换两个顶点会改变定向，从而改变符号。连续删去两个顶点时，每个余下的面出现两次；先删 $i$ 再删 $j$ 与反过来的两项符号相反，因此 $\partial^2=0$。例如三角形的边界是一条闭折线，但在含有三角形内部的复形中它是边界。

## 3.3 奇异同调 ★

单纯复形需要预先剖分。对任意拓扑空间 $X$，改用连续映射 $\sigma:\Delta^n\to X$ 作为基，得到奇异链群 $C_n(X;\mathbb Z)$；边界仍按面限制与交替符号定义。连续映射 $f:X\to Y$ 通过 $f_\#\sigma=f\circ\sigma$ 诱导链映射与同调映射 $f_*$。

> 本讲义未注明系数时，同调取整数系数。带系数 $A$ 的链群是
> $C_n(X;A)=C_n(X;\mathbb Z)\otimes_{\mathbb Z}A$。

$H_0(X;\mathbb Z)$ 是以道路连通分支为基的自由 Abel 群。理由是每条道路的边界为终点减起点，而任意 $1$ 链的边界都只能在同一道路分支内建立这样的关系。

## 3.4 同伦不变性与棱柱算子 ★

设 $F:X\times[0,1]\to Y$ 是 $f$ 到 $g$ 的同伦。在 $\Delta^n\times[0,1]$ 中，记底面顶点为 $v_i$、顶面为 $w_i$，用

$$
[v_0,\ldots,v_i,w_i,\ldots,w_n],\qquad 0\le i\le n
$$

剖分棱柱。先用 $\sigma\times\operatorname{id}$ 把这些单形映入 $X\times[0,1]$，再与 $F$ 复合得到 $Y$ 中的奇异单形，按 $(-1)^i$ 相加，定义 $P_n(\sigma)$。展开边界时，内部公共面两两抵消，顶面留下 $g_\#\sigma$，底面留下 $-f_\#\sigma$，侧面正好是 $-P_{n-1}\partial\sigma$。于是

$$
\partial P+P\partial=g_\#-f_\#.
$$

对循环 $z$，差 $g_\#z-f_\#z=\partial Pz$ 是边界，故 $f_*=g_*$。特别地，可缩空间的正维同调为零。此证明也解释了“链同伦”为什么足以保证同调上的映射相同。

## 3.5 相对同调与长正合列 ★

对子空间 $A\subset X$，取商复形 $C_*(X,A)=C_*(X)/C_*(A)$。一个相对循环允许其边界落在 $A$ 中；它描述在 $A$ 上封口的几何对象。

短正合列 $0\to C_*(A)\to C_*(X)\to C_*(X,A)\to0$ 给出

$$
\cdots\to H_n(A)\to H_n(X)\to H_n(X,A)
\xrightarrow{\delta}H_{n-1}(A)\to\cdots.
$$

连接映射的构造值得掌握。把相对循环 $\bar c$ 提升为 $c\in C_n(X)$，则 $\partial c\in C_{n-1}(A)$，令 $\delta[\bar c]=[\partial c]$。若换一个提升，两提升之差属于 $C_n(A)$，因此所得 $\partial c$ 只相差 $A$ 内的一个边界；换相对同调代表元也不会改变所得同调类。

验证正合性时，例如 $\delta[\bar c]=0$ 意味着 $\partial c=\partial a$，其中 $a\in C_n(A)$，所以 $c-a$ 是 $X$ 中的循环并映到 $[\bar c]$。其余位置同样通过提升、取边界和修改代表元证明，而不是仅凭图形猜测。

## 3.6 切除与 Mayer–Vietoris 序列 ★

> 若 $Z\subset A\subset X$ 且 $\overline Z\subset\operatorname{int}_X A$，则包含诱导
> $H_n(X\setminus Z,A\setminus Z)\cong H_n(X,A)$。

切除的关键是链可以变小。重心剖分使单形直径每次至多缩小到原来的 $n/(n+1)$；剖分算子与恒等链映射之间有由锥构造得到的链同伦。对每条奇异单形，其紧的参数单形有开覆盖的 Lebesgue 数，故有限次剖分后所有小单形都落在指定覆盖的一员中。一条链只含有限个单形，因此可选统一剖分次数。

于是，由落在 $X\setminus Z$ 或 $\operatorname{int}A$ 中的单形生成的小链复形与全链复形同调相同。模去 $A$ 的链后，后一类小单形消失，留下的正是切除后的相对复形。这个论证同时应用于循环和填充链，分别给出满射与单射。

若 $X=U\cup V$，其中 $U,V$ 开，则小链复形有短正合列

$$
0\to C_*(U\cap V)\xrightarrow{c\mapsto(c,-c)}
C_*(U)\oplus C_*(V)\xrightarrow{(a,b)\mapsto a+b}
C_*^{\{U,V\}}(X)\to0.
$$

结合上一节便得到 Mayer–Vietoris 长正合列。把球面分成两个稍大的半球，交集形变收缩到赤道，可以归纳得到

$$
\widetilde H_k(S^n;\mathbb Z)=
\begin{cases}\mathbb Z,&k=n,\\0,&k\ne n.\end{cases}
$$

这里约化同调把非空道路连通空间在零维多出的 $\mathbb Z$ 去掉。

## 3.7 胞腔同调与计算 ★

CW 复形的 $n$ 骨架记为 $X^n$。相对群 $H_k(X^n,X^{n-1})$ 只在 $k=n$ 非零，此时每个 $n$ 胞腔贡献一个 $\mathbb Z$。这由切除和 $(D^n,S^{n-1})$ 的同调得到。三元组的连接映射给出胞腔边界，骨架的长正合列证明胞腔复形计算奇异同调。

具体地，设 $n\ge2$，取一个 $n$ 胞腔的附着映射 $S^{n-1}\to X^{n-1}$。对每个 $(n-1)$ 胞腔，将 $X^{n-1}$ 中该胞腔之外的部分压成一点，商空间便是 $S^{n-1}$。复合所得映射 $S^{n-1}\to S^{n-1}$ 的度数，就是该胞腔在边界中的系数。次数为一时，边界直接按有向边的终点减起点计算。因此 $\mathbb{RP}^2$ 的复形为

$$
0\to\mathbb Z\xrightarrow{\times2}\mathbb Z
\xrightarrow{0}\mathbb Z\to0;
$$

它有 $H_1=\mathbb Z/2\mathbb Z$、$H_2=0$。环面的一个 $2$ 胞腔沿交换子附着，每条边的正负出现次数抵消，故 $H_1(\mathbb T^2)=\mathbb Z^2$、$H_2(\mathbb T^2)=\mathbb Z$。

## 3.8 上同调与杯积

定义 $C^n(X;A)=\operatorname{Hom}_{\mathbb Z}(C_n(X;\mathbb Z),A)$，余边界为 $\delta\varphi=\varphi\circ\partial$。其同调记作 $H^n(X;A)$。当系数 $A$ 为交换环时，对 $p$ 次余链 $\varphi$ 与 $q$ 次余链 $\psi$，分别把一个 $(p+q)$ 单形限制到前 $p+1$ 个顶点和后 $q+1$ 个顶点张成的面，再将两次求值相乘，定义 $\varphi\smile\psi$。这个构造在上同调上诱导

$$
\smile:H^p(X;A)\times H^q(X;A)\to H^{p+q}(X;A).
$$

上同调类满足 $a\smile b=(-1)^{pq}b\smile a$；链级别不必逐项交换。环面的两条坐标方向给出 $a,b\in H^1(\mathbb T^2;\mathbb Z)$，且 $a\smile b$ 生成 $H^2$。杯积于是能识别同调群本身没有记录的乘法结构。

## 3.9 系数、泛系数与 Künneth

整数链复形是自由的，因而有自然短正合列

$$
0\to H_n(X;\mathbb Z)\otimes A\to H_n(X;A)
\to\operatorname{Tor}_1^{\mathbb Z}(H_{n-1}(X;\mathbb Z),A)\to0,
$$

以及上同调版本，左项为 $\operatorname{Ext}^1(H_{n-1}(X;\mathbb Z),A)$，右项为 $\operatorname{Hom}(H_n(X;\mathbb Z),A)$。这些列可以分裂，但一般没有自然的分裂。

取域 $k$ 作系数时，Künneth 定理给出

$$
H_n(X\times Y;k)\cong
\bigoplus_{p+q=n}H_p(X;k)\otimes_{k}H_q(Y;k).
$$

整数系数还需要 Tor 项。证明依赖乘积链复形与奇异链的链同伦等价，以及自由复形的代数计算；可结合代数学的[张量积](../algebra/04-multilinear.md)与[同调代数](../algebra/07-advanced.md)章节阅读。以 $\mathbb{RP}^2$ 为例，模 $2$ 系数会使上节的乘 $2$ 边界消失，不能用“把整数同调的符号换成域”代替计算。

## 3.10 定向、基本类与 Poincaré 对偶 ★

> 闭、连通、定向的 $n$ 维流形有基本类 $[M]\in H_n(M;\mathbb Z)$，且
>
> $$
> H^k(M;\mathbb Z)\xrightarrow{\ \cap[M]\ }H_{n-k}(M;\mathbb Z)
> $$
>
> 是同构。

“闭”在这里指紧且无边界。非定向流形可用 $\mathbb F_2$ 系数；非紧流形的相应形式涉及紧支撑上同调。

在有组合三角剖分的定向流形中（例如光滑流形），证明的几何核心是重心剖分后的对偶胞腔：一个 $k$ 单形对应一个横穿它的 $(n-k)$ 维对偶胞腔。相容定向使余边界对应对偶胞腔的边界，得到复形同构。一般流形版本通过局部定向类与 Mayer–Vietoris 拼接证明；不能把“三角剖分总存在”当作一般拓扑流形的前提。

## 3.11 度数与应用

对 $n\ge1$，连续映射 $f:S^n\to S^n$ 在顶维同调上乘以一个整数，称为 $\deg f$。度数在同伦下不变，复合时相乘。反足映射的度数为 $(-1)^{n+1}$，因为它是 $\mathbb R^{n+1}$ 上 $-I$ 在球面边界上的限制。

若 $n\ge2$ 且存在回缩 $r:D^n\to S^{n-1}$，即 $r$ 在边界球面上为恒等映射，则 $r\circ i=\operatorname{id}$，但 $i_*$ 经过零群 $H_{n-1}(D^n)$，矛盾。$n=1$ 可由连通性排除。这也证明 Brouwer 不动点定理：假定连续 $f:D^n\to D^n$ 无不动点，从 $f(x)$ 经 $x$ 的射线取球面交点，便得到一个连续回缩，与上面的结论矛盾。

## 3.12 与微分形式及高级理论的接口

第 6 章会证明闭形式可以在循环上积分，并说明 de Rham 同构。谱序列则把带过滤的复杂计算拆成逐页修正，第 4、14 章提供使用场景。K 理论、配边与手术不在本章重复定义；它们分别在第 14、15 章出现，以免尚未见过向量丛或流形时先背诵名词。

## 练习

1. 完整展开 $2$ 单形的 $\partial^2$，说明六项如何抵消。
2. 用相对长正合列计算 $H_k(D^n,S^{n-1})$。
3. 计算一个有 $v$ 个顶点、$e$ 条边、$c$ 个连通分支的有限图的 $H_0,H_1$。
4. 分别用整数与 $\mathbb F_2$ 系数计算 $\mathbb{RP}^2$，解释差异。
5. 证明任意连续 $S^n\to S^n$ 的同伦逆若存在，其度数只能是 $1$ 或 $-1$。
