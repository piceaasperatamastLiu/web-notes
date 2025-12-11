## 1. 多项式的因式分解

我们知道，根据代数基本定理，对于任意多项式$f\in\mathbb{C}[x]$，总存在$z_{1},\dots,z_{n}\in\mathbb{C}$，使得
$$
f(z)=c\prod_{i=1}^{n}\left( z-z_{i} \right)
$$

其中$n=\deg f$，它为我们构建了多项式分解的基本理论。现在，我们的问题时，对于$\mathbb{R}[x]$中的多项式，我们能够分解到什么程度？这个问题的答案如下：

> 对于$\mathbb{R}[x]$中的任意多项式，总可以将它分解为一系列不可约一次或二次多项式的乘积，并且这种分解在相差一个常系数的情况下是唯一的

显然，只需要证明了存在性，唯一性的证明便是显然的。对于存在性，我们假定$f\in\mathbb{R}[x]$，如果$z\in\mathbb{C}$且$f(z)=0$，我们需要证明$f\left( \overline{z} \right)=0$，为此考虑
$$
f(z)=c\prod_{i=1}^{n}\left( z-z_{i} \right)\Rightarrow f(\overline{z})=\overline{f(z)}=c\prod_{i=1}^{n}\left( \overline{z}-\overline{z_{i}} \right)
$$

由于复数域上因式分解的唯一性，$z_{i}$和$\overline{z_{i}}$之间一定存在一一对应关系，即存在$j$使得
$$
z_{i}=\overline{z_{j}}
$$

这也就证明了我们前面所给出的引理。现在，我们将$f$的所有顶点在复平面上画出来，则它对应复平面上的$n$个点组成的点集，并且依据前面的引理，这个点集是关于实轴对称的。对于落在实轴上的点，显然它们对应一次多项式。而对于没有落在实轴上的点，假定其为$z$，取其共轭，组成多项式
$$
\left( x-z \right)\left( x-\overline{z} \right)=x^{2}-\left( z+\overline{z} \right)x+z\overline{z}
$$

显然它的系数都是实数，并且它是不可约的，因此通过这样的配对，我们成功得到了因式分解的结果。这种证明方式的另一个显然的结果是，对于奇次多项式，它一定包含一个一次多项式因子（注意这是纯粹的代数结果，不需要使用分析学工具去证明零点的存在性）

---

对于有理多项式的分解，可以通过一些代数方式得到一些优美的存在性理论，但是显然它和微积分关系不大，这里不做介绍

## 2.分式的分解

我们首先引入一个著名的代数结论，即**中国剩余定理**：

> 设$R$是PID，$a_{1},\dots,a_{k}\in R$，且两两互素，则有
> $$
> \frac{R}{\langle a_{1}\cdots a_{k}\rangle }\cong\frac{R}{\langle a_{1}\rangle }\times\cdots\times\frac{R}{\langle a_{k}\rangle }
> $$

这个定理的证明可以通过构造同态
$$
\phi:x+a_{1}\cdots a_{k}R\longmapsto\left( x+a_{1}R,\cdots,x+a_{k}R \right)
$$

由互素性有
$$
s_{i}a_{i}+t_{i}M_{i}=1,s_{i},t_{i}\in R,M_{i}=\frac{\prod_{j=1}^{k}a_{j}}{a_{i}}
$$

于是构造
$$
\varphi:\left(x_{1}+a_{1}R,\cdots,x_{k}+a_{k}R  \right)\longmapsto\sum_{i=1}^{k}x_{i}t_{i}M_{i}+a_{1}\cdots a_{k}R
$$

则可以证明$\varphi$是$\phi$的逆映射。现在我们注意到
$$
t_{i}M_{i}\equiv1(\text{mod } a_{i})
$$

以及更进一步地
$$
t_{i}M_{i}\equiv\delta_{ij}\left( \text{mod }a_{j} \right)
$$

令$A=a_{1}\cdots a_{k}$，则定义
$$
e_{i}:=t_{i}M_{i}+\langle A\rangle 
$$

根据上面的结果可以证明
$$
\begin{aligned}
&e_{i}e_{j}=e_{i}\delta_{ij} \\\\
&e_{1}+\cdots+e_{k}=1
\end{aligned}
$$

这样的$e_{j}$称为**正交等幂元**。显然在上面证明中国剩余定理的构造过程中我们就是用正交等幂元来构造逆映射。现在，考虑一元多项式环$F[x]$，它是一个PID，因此显然也满足上面的性质。从而对于$P(x),Q(x)\in F[x]$，存在正交等幂元$e_{1}(x),\dots,e_{k}(x)$，使得
$$
P(x)\equiv\sum_{i=1}^{k}P(x)e_{i}\left( \text{mod }Q(x) \right)
$$

假定$Q(x)=g_{1}(x)\cdots g_{k}(x)$，其中$g_{1},\dots,g_{k}$两两互素，那么对于任意$i\neq j$都有$g_{i}|e_{j}$，而根据互素性有
$$
\prod_{i\neq j}g_{i}|e_{j}
$$

从而
$$
e_{j}(x)=A_{j}(x)\prod_{i\neq j}g_{i}(x)
$$

因此
$$
\frac{e_{i}(x)}{Q(x)}=\frac{A_{i}(x)}{g_{i}(x)}
$$

现在，我们只考虑$P(x)=1$的情况，此时
$$
\frac{1}{Q(x)}=\frac{\displaystyle\sum_{i=1}^{k}e_{i}(x)}{Q(x)}=\sum_{i=1}^{k}\frac{e_{i}(x)}{Q(x)}=\sum_{i=1}^{k}\frac{A_{i}(x)}{g_{i}(x)}
$$

由于$\deg 1<\deg Q(x)$，故右边不可能出现多项式，从而必须有
$$
\deg A_{i}<\deg g_{i}
$$

加入$g_{i}=f_{i}^{m}$，那么我们还可以根据带余除法写出
$$
\frac{A_{i}(x)}{g_{i}(x)}=\sum_{j=1}^{m}\frac{B_{ij}(x)}{f_{i}(x)^{j}},\deg B_{ij}<\deg f_{i}
$$

因此我们最终得出的结论是，对于任意
$$
Q(x)=\prod_{i=1}^{k}f_{i}(x)^{m_{i}}
$$

其中$f_{i},f_{j}$两两互素，必然存在多项式$B_{ij}$使得
$$
\frac{1}{Q(x)}=\sum_{i=1}^{k}\sum_{j=1}^{m_{i}}\frac{B_{ij}(x)}{f_{i}(x)^{j}},\deg B_{ij}<\deg f_{i}
$$

对于$P(x)/Q(x)$的形式，只需要在上面的结果上乘以$P(x)$即可

---

从以上的结果中可以看出，对于$Q(x)\in\mathbb{C}[x]$，如果
$$
Q(z)=c\prod_{i=1}^{k}\left( z-z_{i} \right)^{m_{i}}
$$

那么一定存在$c_{ij}\in\mathbb{C}$，使得
$$
\frac{1}{Q(z)}=\sum_{i=1}^{k}\sum_{j=1}^{m_{i}}\frac{c_{ij}}{\left(z-z_{i}\right)^{j}}
$$

而对于$Q(x)\in\mathbb{R}[x]$，根据
$$
Q(x)=\lambda\prod_{i=1}^{k}\left( x-\lambda_{i} \right)^{m_{i}}\prod_{j=1}^{l}\left( x^{2}+a_{j}x+b_{j} \right)^{n_{j}}
$$

其中$a_{j}^{2}-4b_{j}<0$，则一定存在$u_{ip},v_{jq},w_{jq}\in\mathbb{R}$，使得
$$
\frac{1}{Q(x)}=\sum_{i=1}^{k}\sum_{p=1}^{m_{k}}\frac{u_{ip}}{\left(x-\lambda_{i}\right)^{p}}+\sum_{j=1}^{l}\sum_{q=1}^{n_{j}}\frac{v_{jq}x+w_{jq}}{\left( x^{2}+a_{j}x+b_{j} \right)^{q}}
$$

根据带余除法，显然分子中的多项式并不会改变解的整体形式，而是至多导致加上一个多项式

## 3.有理函数的积分

当我们考虑有理函数的不定积分时，对于复数域上的情况时简单的，此时我们只需要考虑形如
$$
\int\frac{dz}{\left( z-a \right)^{l}}
$$

的积分即可，而这是很容易求的，唯一的问题在于结果不一定具备直观的形式。而对于实数的情况，奇次部分的处理方式完全一致。对于偶次部分，我们需要处理形如
$$
\int\frac{px+q}{\left( x^{2}+ax+b \right)^{l}}dx
$$

的积分，为此对下面的部分配分并作代换，最终能够化为
$$
\int \frac{x}{\left(x^{2}+a\right)^{l}}dx+k\int\frac{dx}{\left( x^{2}+a \right)^{l}}
$$

的形式，前半部分通过积分换元法可以很方便地求解。对于后半部分，假定
$$
I_{l}:=\int\frac{dx}{\left(x^{2}+a\right)^{l}}
$$

计算这个积分最常规的方式是令
$$
u=\frac{1}{\left( x^{2}+a \right)^{l}}\Rightarrow du=-2l\frac{x}{\left( x^{2}+a \right)^{l+1}}dx
$$

随后利用分部积分推导出$I_{l}$和$I_{l+1}$的递推公式，进而求解。这里介绍一种更加简单的方式，通过将$a$看作变量，用
$$
\frac{\partial I_{l}(a)}{\partial a}=-l\int\frac{dx}{\left( x^{2}+a \right)^{l+1}}=-lI_{l+1}(a)
$$

从而
$$
I_{l}(a)=\frac{(-1)^{l-1}}{(l-1)!}\frac{\partial^{l-1} }{\partial a^{l-1}}J(a)
$$

这里
$$
J(a):=I_{1}(a)=\frac{1}{\sqrt{a}}\arctan\frac{x}{\sqrt{a}}
$$

即为母函数。至此，该问题得到了完全的解决
