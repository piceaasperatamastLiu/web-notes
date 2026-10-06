# 第 7 章 李群、作用与齐性空间

连续对称性同时具有群结构与流形结构。李群把两者联系起来，而齐性空间把“所有点看起来一样”变成可以计算的条件。

## 7.1 从矩阵群到李群 ★

> 李群是乘法与求逆光滑的光滑流形 $G$。其李代数为
> $\mathfrak g=T_eG$，括号由左不变向量场的括号定义。

例如 $\operatorname{GL}_n(\mathbb R)$ 是矩阵空间的开集；$\operatorname O(n)$ 由 $A^{\mathsf T}A=I$ 给出。沿 $A(t)$ 在单位元求导，得到 $X^{\mathsf T}+X=0$，故 $\mathfrak o(n)$ 是反对称矩阵。矩阵李代数的括号为 $[X,Y]=XY-YX$。

并非任意拓扑群都是李群。闭子群定理保证李群的闭子群具有相容的李群结构；这是本章引用的结构定理，不由“闭集合”自动推出。

## 7.2 指数映射与伴随表示

左不变向量场的积分曲线从单位元出发形成单参数子群，定义 $\exp(tX)$。矩阵群中它就是收敛级数 $\sum_{j\ge0}t^jX^j/j!$。$d\exp_0=\operatorname{id}$，故指数在零点附近为微分同胚，但全局未必单射或满射。

共轭的微分给出 $\operatorname{Ad}_g:\mathfrak g\to\mathfrak g$，其在单位元的微分为 $\operatorname{ad}_X(Y)=[X,Y]$。表示论与最高权理论见代数学讲义；此处关注它们在轨道和丛中的几何作用。

## 7.3 群作用与商流形 ★

光滑左作用的轨道为 $Gx$，稳定子为 $G_x$。映射 $G/G_x\to Gx$ 给出轨道的齐性描述；一般轨道首先是浸入子流形，不能无条件认作嵌入。

> 自由且适当的光滑李群作用具有光滑商 $M/G$，投影是满秩映射，并局部为主丛。

适当是映射 $G\times M\to M\times M$，$(g,x)\mapsto(gx,x)$ 为适当映射。紧群的作用自动适当。自由消除稳定子，适当性控制不同轨道的分离；局部横截片与逆函数定理给出商图。没有适当性，稠密轨道可能产生非 Hausdorff 商。

## 7.4 经典齐性空间

正交群把任意单位向量移到任意另一个，稳定子为 $\operatorname O(n)$，故
$S^n\cong\operatorname O(n+1)/\operatorname O(n)$。
类似地，

$$
\operatorname{Gr}_r(\mathbb R^n)
\cong\operatorname O(n)/(\operatorname O(r)\times\operatorname O(n-r)).
$$

射影空间是 $r=1$ 的情形。复 Grassmann 流形用酉群代替正交群。这里商空间的维数可由群与稳定子的维数相减计算。

## 7.5 对称空间 ○

Riemann 对称空间的每一点都有使该点切向量取负的全局等距对称。球面与双曲空间是典型例子。代数上，群的对合常给出分解
$\mathfrak g=\mathfrak k\oplus\mathfrak p$，满足
$[\mathfrak k,\mathfrak k]\subset\mathfrak k$、
$[\mathfrak k,\mathfrak p]\subset\mathfrak p$、
$[\mathfrak p,\mathfrak p]\subset\mathfrak k$。
最后一个关系是研究齐性度量曲率的起点，不能将所有齐性空间都称作对称空间。

## 7.6 主丛与相伴丛 ★

主 $G$ 丛采用右作用，局部形如 $U\times G$。若 $\rho:G\to\operatorname{GL}(V)$ 是左表示，则相伴向量丛的等价关系为

$$
(p,v)\sim(pg,\rho(g^{-1})v).
$$

因此局部坐标变换自然使用表示矩阵。切丛的标架丛是主 $\operatorname{GL}_n$ 丛；指定 Riemann 度量后，正交标架组成主 $\operatorname O(n)$ 丛。第 8 章的连接可以看成在主丛上选择“水平运动”。

## 7.7 分类空间与通用丛 ☆

在仿紧 Hausdorff 空间上，主 $G$ 丛可由映射到分类空间 $BG$ 的同伦类分类，记作 $[X,BG]$；通用丛 $EG\to BG$ 的总空间可缩。这个定理解释了为什么丛有上同调不变量。

例如复线丛由 $[X,\mathbb{CP}^{\infty}]\cong H^2(X;\mathbb Z)$ 分类，对应第一 Chern 类。实线丛则对应 $H^1(X;\mathbb F_2)$。这里必须保持域、次数和系数一致，不能把复线丛与实线丛的分类混用。

## 7.8 基本向量场的符号

左作用定义 $\xi_M(x)=\left.\frac d{dt}\right|_0\exp(t\xi)x$。在这个约定下
$[\xi_M,\eta_M]=-[\xi,\eta]_M$：在 $G$ 对自身左乘的例子中，这些是右不变向量场。第 10 章的矩映射使用同一约定。

## 练习

1. 求 $\operatorname{SO}(3)$ 的李代数并计算一组基的括号。
2. 证明 $S^1$ 上旋转作用自由，而 $S^2$ 上绕固定轴旋转不自由。
3. 写出 Möbius 实线丛的过渡函数，解释它为何不是平凡丛。
4. 用 $G$ 对自身的左作用检查第 7.8 节的负号。
