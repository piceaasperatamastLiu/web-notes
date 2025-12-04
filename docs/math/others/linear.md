这个页面主要是整理考研复习过程中忘记的一些问题，以及补上之前没学的一些内容

## 1. 线性方程组

假定$x\in\mathbb{R}^{n},A\in\mathbb{R}^{m\times n}$，考虑方程$Ax=0$，显然我们有$x\in\ker f$，其中
$$
f:\mathbb{R}^{n}\rightarrow\mathbb{R}^{m},v\longmapsto Av
$$

显然$\dim\ker f=n-\text{rank}A$，因此当$m<n$时$\text{rank}A<n$，从而$\ker f$一定是非平凡的。当$m\ge n$时，解的结构需要根据$A$的秩的判断，但是一定有一个平凡解$x=0$

再来考虑非线性方程$Ax=b$，我们知道它的解总可以写为通解加特解的形式。在关于解的存在性问题上，我们只需要注意到$Ax=b$等价于
$$
\begin{pmatrix}
A&b
\end{pmatrix}\begin{pmatrix}
x\\\\ 1
\end{pmatrix}=0
$$

也就是说矩阵$\begin{pmatrix}
A&b
\end{pmatrix}$一定要有一个非平凡的解，从而$\text{rank}\begin{pmatrix}
A&b
\end{pmatrix}$必须小于$n$.如果$X\in\mathbb{R}^{n\times l},B\in\mathbb{R}^{m\times l}$，那么方程$AX=B$可以写为
$$
\begin{pmatrix}
A&B
\end{pmatrix}\begin{pmatrix}
X\\\\ I
\end{pmatrix}=0
$$

因此也可以使用类似的方法

## 2.基变换

下面我们用矩阵$E$表示基拼接而成的矩阵，$T$表示线性映射，$A$表示其对应的矩阵，$v$表示向量，$x$表示其在基下的坐标，下标$B,C$表示两种基的情况。则有
$$
v=E_{B}x_{B}=E_{C}x_{C}
$$

现在假定基变换矩阵为
$$
x_{C}=P_{CB}x_{B}
$$

于是便有
$$
E_{B}x_{B}=E_{C}P_{CB}x_{B}\Rightarrow E_{B}=E_{C}P_{CB}
$$

也就是说
$$
E_{C}=E_{B}P_{CB}^{-1}=E_{B}P_{BC}
$$

对于线性映射$T$，有
$$
T(v)=\sum_{j}x_{j}T\left( e_{j} \right)=\sum_{j}x_{j}\sum_{k}a_{ij}e_{i}=\sum_{j}\left( \sum_{i}a_{ij}x_{j} \right)e_{i}=EAx
$$

因此
$$
E_{B}A_{B}x_{B}=E_{C}A_{C}x_{C}
$$

从而
$$
A_{C}=P_{CB}A_{B}P_{BC}
$$

特别的，如果$B$是标准基，那么$E_{B}=I$，从而
$$
E_{C}=E_{B}P_{BC}=P\Rightarrow A_{C}=P^{-1}A_{B}P
$$

此外，如果$B$是标准基，那么$T$在$B$下面能够有更加简单的形式，此时
$$
E=EI\Rightarrow T(E)=EAI\Rightarrow A=E^{-1}T(E)
$$

特别的，如果$E=I$，那么$A=T(I)$

## 3. 谱理论

谱理论部分我们尝试使用完全代数的理论去构建，为此我们首先回顾如下定义：

### 环和模

对于幺环$R$，一个左$R$-**模**（下文默认省略“左”字）定义为交换群$A$和映射$R\times A\rightarrow A,a\longmapsto r\cdot a$，它满足
$$
\begin{aligned}
(1)&r\cdot (a+b)=r\cdot a+r\cdot b \\\\
(2)&(r+s)\cdot a=r\cdot a+r\cdot b\\\\
(3)&r\cdot (s\cdot a)=(rs)\cdot a\\\\
(4)&1_{R}\cdot a=a
\end{aligned}
$$

有些时候第四条性质不被包含在模的定义里面。如果$R$是一个域，则称$R$-模是一个向量空间。也就是说域$F$上的任意向量空间都是$F$-模。对于$a_{1},\cdots,a_{n}\in A$，我们定义由$a_{1},\cdots,a_{r}$生成的**子模**为
$$
Ra_{1}+\cdots+Ra_{n}:=\\{r_{1}\cdot a_{1}+\cdots+r_{n}\cdot a_{n}|r_{1},\cdots,r_{n}\in R\\}
$$

称模是**有限生成**的，如果存在$a_{1},\cdots,a_{n}\in A$，使得它们生成的子模等于$A$

环$R$被成为是**整环**，如果它存在不为零的乘法幺元，并且对于乘法是交换的，并且没有零因子，即
$$
\forall a,b\in R\left( ab=0\Leftrightarrow a=0\vee b=0 \right)
$$

对于环$R$，它的子集$I$被称为$R$的一个左**理想**，如果$(I,+)$是$(R,+)$的一个子群，且对任意$i\in I,r\in R$，都有$ri\in I$，类似的可以定义右理想和双边理想（简称理想）。对于整环$R$（对于一般的环形式更加复杂）的非空子集$A$，由$A$生成的理想定义为
$$
\langle A\rangle:=\left\\{\sum_{i=1}^{n}r_{i}a_{i},r_{i}\in R,a_{i}\in A\right\\} 
$$

不难验证它是一个理想（通常生成会使用圆括号，这里为了方便采用尖括号）。如果$A=\\{a\\}$是单元素集，则称$\langle A\rangle=\langle a\rangle  $为环$R$的**主理想**。整环$R$被称为**主理想整环**（简称PID），如果它的每个理想都是主理想

对于环$R$，$M$是一个$R$-模，$m\in M$，则$m$的一个**湮没理想**定义为
$$
\text{Ann}(m):=\\{r\in R|r\cdot m=0\\}
$$

显然它也是一个理想。而对于整个模的湮没理想定义为
$$
\text{Ann}(M):=\\{r\in R|\forall m\in M\left( r\cdot m=0 \right)\\}
$$

---

下面我们给出一个核心定理（PID上的模结构定理）：

> 假定$R$是PID，$M$是有限生成$R$-模，则存在唯一$r\ge0$以及一串在相伴意义下（可以相差一个单位）唯一的非零非单位元素$a_{1},\cdots,a_{k}\in R$，使得
> $$
> M\cong R^{r}\oplus\frac{R}{\langle a_{1}\rangle }\oplus\cdots\oplus\frac{R}{\langle a_{k}\rangle }
> $$
>
> 并且满足$a_{1}|\cdots|a_{k}$，其中$r$为自由部分的秩，$R^{r}$表示$r$个$R$的直和

证明这个定理的大体思路如下：由于$M$是有限生成的，假定$M$由$n$个元素生成，那么
$$
m=r_{1}\cdot m_{1}+\cdots +r_{n}\cdot m_{n},\forall m\in M
$$

定义
$$
\phi:R^{n}\rightarrow M,\left( r_{1},\cdots,r_{n} \right)\longmapsto r_{1}\cdot m_{1}+\cdots+ r_{n}\cdot m_{n}
$$

于是显然$\phi$是一个满同态，从而
$$
M\cong R^{n}/\ker\phi
$$

随后我们需要存在$m\le n$使得
$$
\ker\phi\cong R^{m}
$$

这一结论，它是PID上的自由模的子模仍然是自由模这一结论的推论，相关的证明可以参考专门的代数书籍。现在，我们需要注意到存在一个矩阵$A$，使得$\ker\phi=AR^{m}$，随后可以通过高斯消元法将其变为具有$r$个非零元素$a_{i}$的形式，并且$a_{1}|a_{2}|\cdots|a_{r}$，其中这里的高斯消元包含下面三个操作：  
1. 交换两行（列）  
2. 将某一行（列）乘以一个单位（可逆元）后加到另一行（列）  
3. 将某一行（列）乘以 R中的一个单位  

这个结论的证明我们这里不附上，但是可以将其按照辗转相除法进行理解（虽然$R$不一定是欧几里得整环，不过我们将要应用的场景里一定是欧几里得整环）。由于$A$已经被对角化，因此将$R^{n}/\ker\phi$的具体形式写出来，就不难得出
$$
M\cong R^{n}/\ker\phi\cong R^{n-r}\oplus\frac{R}{\langle a_{1}\rangle }\oplus\cdots\oplus\frac{R}{\langle a_{r}\rangle }
$$

---

关于$M$有没有自由部分，最简单的方式就是计算其湮没理想：如果一个模的湮没理想是非平凡的，那么它一定不含有自由部分

### 向量空间的分解

现在我们开始应用上面的抽象代数理论。首先，对于有限维向量空间$V$和线性映射$T\in\text{Hom}(V,V)$，我们定义域$F$上的多项式
$$
f(T)=\sum_{n} c_{n}T^{n},c_{n}\in F,T^{n}:=\underbrace{T\circ \cdots\circ T}_{n\text{ times}}
$$

显然这些多项式构成一个环$F[t]$，将其作用在向量空间$V$上，得到一个$F[t]$-模，其中
$$
f(t)\cdot v:=f(T)v
$$

于是依照多项式环的形式，$F[t]$是一个PID，并且存在$m(t)\in F[t]$，使得
$$
\text{Ann}(V)=\langle m(t)\rangle 
$$

这个生成元被称为最小多项式。不难证明，对于任意$T$，$V$都存在非平凡的湮没理想，从而$V$一定不含有自由成分，也就是说存在$d_{1}(t),\cdots,d_{k}(t)\in F[t]$，使得$d_{1}(t)|\cdots|d_{k}(t)$且
$$
V\cong\frac{F[t]}{\langle d_{1}(t)\rangle }\oplus\cdots\oplus \frac{F[t]}{\langle d_{k}(t)\rangle }
$$

其中$d_{k}$就是最小多项式。现在我们引入著名的中国剩余定理，它指出对于多项式
$$
f(t)=\prod_{i}g_{i}(t)
$$

如果$g_{i},g_{j}$两两互素，那么有
$$
\frac{F[t]}{\langle f(t)\rangle }\cong\frac{F[t]}{\langle g_{1}(t)\rangle }\oplus\cdots\oplus\frac{F[t]}{\langle g_{k}(t)\rangle }
$$

因此我们将$d_{j}$因式分解，就能得到
$$
V\cong\bigoplus_{j}F[t]/\langle p_{j}(t)^{k_{j}} \rangle 
$$

这里$p_{j}$是不可约的，注意对于不同的$i,j$，$p$和$k$都可能是相等的。我们定义
$$
\chi_{T}(t):=\prod_{j}p_{j}(t)^{k_{j}}
$$

这里的$p$和$k$均遍历分解的结果（允许重复），这个多项式称为**特征多项式**。由于$m$是湮没理想，有$m(T)=0$，而显然$m|\chi$，从而有
$$
\chi_{T}(T)=0
$$

这个结果就是著名的Cayley-Hamilton定理。

---

现在考虑映射
$$
\phi:F[t]\rightarrow\ker p(T)^{k}\subseteq V,f(t)\longmapsto f(T)(v_{0})
$$

其中$v_{0}\in\ker p(T)^{k}$满足$\\{v_{0},T(v_{0}),\cdots,T^{k-1}(v_{0})\\}$线性无关（可以证明这样的向量一定存在，但是证明过程十分复杂，这里略去），从这个定义中不难得出$\phi$是满同态。并且，由于能够使得$f(T)(v_{0})=0$的阶数最小的多项式为$p(t)^{k}$，因此$\ker\phi$中必然含有$p^{k}$这个因子，因此
$$
\ker\phi=\langle p(t)^{k}\rangle 
$$

从而有
$$
F[t]/\ker\phi\cong\text{Im}\phi\Rightarrow F[t]/\langle p(t)^{k}\rangle\cong\ker p(T)^{k}=:V_{p} 
$$

由于$V_{p}\subseteq V$，我们显然可以得出
$$
V=\bigoplus_{j}V_{p_{j}}
$$

这样我们便将向量空间分解为**不变子空间**的直和。$V_{p}$被称为是不变子空间，因为
$$
T(V_{p})\subseteq V_{p}
$$

这个证明是显然的。这样的结构的好处在于如果我们选定$V_{p}$中的一组基$v_{j}$，那么$T(v_{j})$也在$V_{p}$中，也就是说$v_{j}$对应的行和列在不属于$V_{p}$的部分都是零，因此在这种基下算子$T$可以写为
$$
\begin{pmatrix}
A_{1}&&\\\\
&\ddots&\\\\
&&A_{k}
\end{pmatrix}
$$

也就是说矩阵是分块对角的，这使得矩阵具有了非常好的性质

---

现在回到结构定理的证明过程，我们注意到
$$
\phi:F[t]^{n}\rightarrow V,\ker\phi\cong F[t]^{n}
$$

因此可以选基$e_{j}\in F[t]^{n}$，使得$e_{i}\cdot v_{j}=\delta_{ij}$，则此时
$$
\phi(te_{j})=(te_{j})\cdot v_{j}=t\cdot v_{j}=T(v_{j})=\sum_{k}a_{jk}v_{k}=\phi\left( \sum_{k}a_{jk}e_{k} \right)
$$

于是
$$
te_{j}-\sum_{k}a_{jk}e_{k}\in\ker\phi
$$

现在考虑
$$
\pi:F[t]^{n}\rightarrow F[t]^{n},x\longmapsto (tI-A)x
$$

那么由于$\pi(e_{j})\in\ker\phi$，我们有
$$
\text{Im}\pi\subseteq\ker\phi
$$

然后考虑到线性映射$tI-A$一定是可逆的（最简单的方式就是注意到它是行列式一定是$n$次多项式），我们有
$$
\text{Im}\pi=\ker\phi\Rightarrow\ker\phi=(tI-A)F[t]^{n}
$$

因此
$$
V\cong F[t]^{n}/(tI-A)F[t]^{n}
$$

把$tI-A$按照高斯消元的方式对角化，即可得到结构定理，因此我们不难看出特征多项式
$$
\chi_{T}(t)=\det\left( tI-A \right)
$$

这也就是我们通常计算特征多项式的方式

### 对角化

对于$\dim V_{p}=1$的情况，我们只需要找到一个$v\in V_{P}$即可描述$V_{p}$中的所有向量。由于
$$
\dim V_{p}=\dim\ker p(T)^{k}=\dim\frac{F[t]}{\langle p(t)^{k}\rangle }=k\deg p
$$

所以
$$
\dim V_{p}=1\Leftrightarrow \deg p=1\wedge k=1
$$

因此一维情况下$p(t)=t-\lambda$，从而有
$$
(T-\lambda)v=0\Rightarrow T(v)=\lambda v
$$

这也就是我们所说的特征值和特征向量。在找到特征向量$v$后，由于$T(v)=\lambda v$，因此它对应的$1\times 1$矩阵只有一个元素$\lambda$，也就是特征值。在$\mathbb{C}$上根据代数基本定理，所有多项式都能分解为
$$
f(t)=c\prod_{i}\left( t-c_{i} \right)^{k_{i}}
$$

的形式，因此此时矩阵可以相似对角化当且仅当其所有的初等因子$p^{k}$的幂次都是$1$，这也就是我们通常所说的“代数重数等于几何重数”的等价表示，在这里几何重数为形如$(t-c_{i})^{k}$的初等因子的个数。另一个等价表示为最小多项式可以表示为两两互素的一次项的乘积。对于不在$\mathbb{C}$上的情况，例如$\mathbb{R}$下的线性算子
$$
A=\begin{pmatrix}
0&0&1\\\\1&0&-1\\\\0&1&1
\end{pmatrix}
$$

它对应于
$$
\mathbb{R}^{3}\cong\frac{\mathbb{R}[t]}{\langle t^{2}+1\rangle }\oplus\frac{\mathbb{R}[t]}{\langle t-1\rangle }
$$

因此我们至多只能得到
$$
A\sim\begin{pmatrix}
0&-1&0\\\\1&0&0\\\\0&0&1
\end{pmatrix}
$$

而无法在实数范围内将它对角化

### Jordan标准型

对于形如$(t-\lambda)^{k},k>1$的初等因子，显然它无法继续对角化，此时我们可以选取
$$
1,t-\lambda,(t-\lambda)^{2},\cdots,(t-\lambda)^{k-1}
$$

为标准基，则
$$
\begin{aligned}
t(1)&=t-\lambda+\lambda \\\\
t(t-\lambda)&=(t-\lambda)^{2}+\lambda(t-\lambda)\\\\
t\left( t-\lambda \right)^{2}&=\left( t-\lambda \right)^{3}+\lambda\left( t-\lambda \right)^{2}\\\\
\vdots\\\\
t\left( t-\lambda \right)^{k-1}&=\left( t-\lambda \right)^{k}+\lambda\left( t-\lambda \right)^{k-1}
\end{aligned}
$$

因此如果选择$v_{0}\in V_{p},v_{j}=(T-\lambda I)v_{j-1}$，则有
$$
T(v_{j})=v_{j+1}+\lambda v_{j} ,
T(v_{k-1})=\lambda v_{k-1}
$$

定义$w_{j}=v_{k-1-j}$，则
$$
T(w_{0})=\lambda w_{0},T(w_{j})=w_{j-1}+\lambda w_{j}
$$

于是此时矩阵可以写为
$$
\begin{pmatrix}
\lambda&1&&\\\\
&\lambda&\ddots&\\\\
&&\ddots&1\\\\
&&&\lambda
\end{pmatrix}
$$

这种形式就是Jordan标准型。通常如果$v$是特征向量，那么满足
$$
\left( T-\lambda I \right)u=v
$$

的$u$称为广义特征向量。同样，如果$v$是广义特征向量，那么类似的$u$也称为广义特征向量。我们前面之所以会对基的顺序做一个翻转，除了让矩阵呈现出Jordan标准型的形式外，还有一个原因是让它满足特征向量-广义特征向量的顺序

---

最后我们看一个简单的定理，即实对称矩阵都可以在实数范围内相似对角化。为了证明这个定理需要引入内积结构
$$
\langle u,v\rangle:=u^{T}v 
$$

并注意到
$$
\langle Au,v\rangle=\langle u,Av\rangle 
$$

在此基础之上，可以证明实对称矩阵的特征值都是实数。最后，我们需要证明$A$的所有初等因子都是一次的，也就是说不存在广义特征向量。为此假定$v$是特征向量，$u$是广义特征向量，由于$A-\lambda I$也是对称的，有
$$
\langle v,v\rangle=\langle \left( A-\lambda I \right)u,v\rangle =\langle u,\left( A-\lambda I \right)v\rangle=0
$$

所以$v=0$，但是这显然是矛盾的，从而我们证明了实对称矩阵一定可以在实数范围内相似对角化
