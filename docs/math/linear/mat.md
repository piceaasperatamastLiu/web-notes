## 1.线性方程组

### 消元

最简单的一种线性方程组为：

$$
\begin{cases}
a_{11}x_1+\cdots+a_{1n}x_n&=b_1
\\\\ \vdots
\\\\ a_{n1}x_1+\cdots+a_{nn}x_n&=b_n
\end{cases}
$$

这个方程可以写为

$$
Ax=b
$$

的形式，其中$A$是$a_{ij}$组成的方阵，$\displaystyle{x:=\left(\begin{matrix}x_1 \\\\\vdots \\\\x_n\end{matrix}\right)}$，$\displaystyle{b:=\left(\begin{matrix}b_1 \\\\\vdots \\\\b_n\end{matrix}\right)}$
我们当然有许多种方法解这个方程，最直接的就是通过消元来解方程，而消元又是由多个步骤复合而成的，最基本的包括在等式的两边同时除以一个数，或是将一行加到另一行上，以及将两行对换，显然这些操作都是可逆的
我们构造矩阵

$$
(A\vert b):=\left(\begin{matrix}
a_{11}&\cdots&a_{1n}&b_1
\\\\ \vdots&\ddots&\vdots&\vdots
\\\\ a_{n1}&\cdots&a_{nn}&b_n
\end{matrix}\right)
$$

这样的矩阵称为**增广矩阵**，于是上面所提到的变换都可以认为是对这个矩阵的变换，我们可以写出它们对应的矩阵（以二维的情况为例）：

$$
\begin{aligned}
\text{交换两行}\left(\begin{matrix}
0&1
\\\\1&0
\end{matrix}\right)
\\\\\text{第一行乘}\lambda\left(\begin{matrix}
\lambda&0 \\\\0&1
\end{matrix}\right)
\\\\ \text{将第二行加到第一行上}\left(
    \begin{matrix}
    1&1 \\\\0&1
    \end{matrix}
\right)
\end{aligned}
$$

我们知道另一种解法为

$$
Ax=b\Rightarrow x=A^{-1}b
$$

也就是把增广矩阵从$\displaystyle{(A\vert b)}$变为$(I\vert A^{-1}b)$，换句话说就是将增广矩阵的前$n\times n$的部分化为单位矩阵，这就是我们通常的解线性方程组的方法

类似的，考虑方程组

$$
AX=B
$$

我们也可以写出

$$
(A\vert B)\Rightarrow (I\vert A^{-1}B)
$$

如果$B=I$，那么我们可以用这个方法计算逆矩阵。

### 基变换

作为一个简单的应用，我们来考虑一个问题：
对于两组向量$v_1,\cdots,v_n$和$u_1,\cdots,u_n$，它们都是基，我们希望能找到一个矩阵$P$，使得

$$
Pv=u
$$

也就是说可以通过对增广矩阵

$$
(u_1|\cdots|u_n|v_1|\cdots|v_n)
$$

进行变换，使得左边消为单位矩阵，但这要求向量是列向量。如果是行向量，则对其取转置，则可得出结果
如果一个向量在$v$下的坐标为$x$，在$u$下的坐标为$x'$，那么我们实际上是在寻求

$$
\begin{aligned}
a&=x_1v_1+\cdots+x_nv_n
\\\\&=x_1P^{-1}u_1+\cdots+x_nP^{-1}u_n
\\\\&=x_1'Iu_n+\cdots+x_n'Iu_n
\end{aligned}
$$

也就是说可以认为

$$
x'=xP^{-1}
$$

## 2.秩

从上面的讨论中我们知道如果一个矩阵是可逆的，那么它一定可以通过初等变换化为单位矩阵（或者是和单位矩阵**等价**，等价定义为$\displaystyle{A\sim B\Leftrightarrow \exist P,Q\in \text{SL}(n,F)(A=PBQ)}$，但此后我们一般不用$\sim$表示等价），反过来，如果一个矩阵可以通过初等变换化为单位矩阵，则

$$
A=E_1E_2\cdots E_n
$$

由于这些矩阵都是可逆的，于是$A$也是可逆的，所以一个矩阵可逆，如果它可以化为单位矩阵。那么，如果一个矩阵不可逆，则那一定不能化为单位矩阵，例如矩阵

$$
\left(\begin{matrix}
I_r&
\\\\ &0_s
\end{matrix}\right)
$$

就是不可逆的，并且它们彼此之间也不能通过初等变换互化，这样的矩阵我们称为标准型，而$r$称为该矩阵的**秩**

我们前面也定义了秩，为了表示两个定义不矛盾，我们考虑：
对于$f\in\text{Hom}(V,W)$，我们定义其

$$
\text{rank}f:=\dim\text{Im}f,\text{nullity}f:=\dim\ker f
$$

这样肯定有

$$
\dim V=\text{rank}f+\text{nullity}f
$$

如果映射是双射，那么

$$
V\cong W\Rightarrow\dim V=\dim W=\text{rank}f
$$

反过来，如果如果$\text{rank}f=\dim V$，那么

$$
\text{nullity}f=0\Rightarrow \dim\ker f=0\Rightarrow f=\{0\}
$$

所以$f$是单射，也因此是双射
如果$f$不是单射，我们可以假定$f(v_1\cdots,v_n)=(v_1,\cdots,v_r,0,\cdots,0)$，这样$\text{Im}f=r$，类似的可以证明等价性

在上一节中我们知道一个$m\times n$的矩阵一定可以写为$n$个列向量或是$m$个行向量的增广矩阵，我们乘这些向量张成的空间为**行空间**和**列空间**，它们的维数分别称为**行秩**和**列秩**

不难证明，行秩一定等于列秩，并且也等于秩

## 3.行列式

### 基本概念

考虑一组向量$v_1,\cdots,v_n\in F^n$，，我们希望构造一个反对称泛函：

$$
\mathscr{D}:(F^n)^n\rightarrow F,(v_1,\cdots,v_n)\longmapsto \mathscr{D}(v_1,\cdots,v_n)
$$

它是$n$重线性的，并且对标准正交基$e_i$，有

$$
\mathscr{D}(e_1,\cdots,e_n)=1
$$

像这样的泛函我们称为**行列式**，特别的，对于方阵，它可以写为多个列向量的增广矩阵，那么矩阵的行列式就定义为列向量的行列式（也可以用行向量，后面会看到它们是等价的），记为$\det(A)$或$|A|$
我们知道

$$
a_i=\sum_{j}a_{ij}e_j
$$

于是

$$
\mathscr{D}(a_1,\cdots,a_n)=\sum_{j1}\sum_{j2}\cdots\sum_{jn}\prod_{i}a_{ij}\mathscr{D}(e_{ji},\cdots,e_{jn})
$$

如果存在$j_{l}=j_{m}$，那么行列式为$0$，于是上面的求和一定只能取为$S_n$中的某个元素，考虑到

$$
\mathscr{D}(e_{\sigma(1)},\cdots,e_{\sigma(n)})=\text{sgn}(\sigma)
$$

所以有

$$
\det(A)=\sum_{\sigma\in S_n}\text{sgn}(\sigma)\prod_{i=1}^na_{i\sigma(i)}
$$

这个结果称为行列式的全展开。从这个式子很容易得出

$$
\det(A^T)=\det(A)
$$

现在我们可以计算初等变换矩阵的行列式，这里直接给出结论：倍乘变换的行列式等于倍乘的系数，对换的行列式等于$-1$，将一行加到另一行的行列式为$1$（这实际上就是定义），所以对于某个初等变换$E_a$，有

$$
\det(E_aA)=\det(E_a)\det(A)
$$

这样不断分解下去，就有：对可逆方阵$A,B$，有

$$
\det(AB)=\det(A)\det(b)
$$

对不可逆的矩阵，有

$$
\det(A)=\prod_{a}\det(E_a)\times\det\left(\begin{matrix}
I_r& \\\\&0_s
\end{matrix}\right)=0
$$

同理，如果矩阵的行列式为$0$，那么它不可逆，这样就有：对任意$A,B\in F^{n\times n}$，都有

$$
\det(AB)=\det(A)\det(B)
$$

进而可以得出相似矩阵的行列式相等

回到前面的全展开式，我们定义

$$
\sigma_i\in S_n,\sigma_i(i)=i
$$

也就是说存在不动点，于是

$$
\det(A)=\sum_{i=1}^na_{il}\sum_{\sigma_i|\\{1,\cdots,n\\}\backslash\\{i\\}\in S_{n-1}}\text{sgn}(\sigma_i)\prod_{1\le j\le n;j\neq i}a_{j\sigma(j)}
$$

可以证明上面这个式子等于

$$
\det(A)=\sum_{1\le i\le n;j=\text{const}} a_{ij}A_{ij}
$$

这里$A_{ij}$定义为矩阵去掉第$i$行和第$j$列后的矩阵的行列式乘以$(-1)^{i+j}$，称为**代数余子式**，这个式子也称为行列式按行（列）展开

### 克莱默法则

如果一个矩阵$A$可逆，则

$$
A^{-1}=\frac{1}{\det(A)}A^a
$$

其中

$$
(A^a)_{ij}:=A\_{ji}
$$

称为矩阵的**古典伴随**（区别于伴随，它具有一般的意义，而古典伴随没有）。大体的证明过程如下：考虑
$$
\begin{aligned}
(A^aA)\_{ij}&=\sum_{k=1}^n A^a_{ik}a_{kj}
\\\\ &=\sum_k A_{ki}a_{kj}
\end{aligned}
$$

如果$i=j$那么上式就等于$\det(A)$，而如果$i\neq j$，考虑一个矩>阵，它的第$i$列被$a_{kj}$替换，其他的与$A$一致，则该矩阵的行列式为>$0$，以列$k$展开则可得出上式为$0$，于是

$$
(A^aA)\_{ij}=\delta_{ij}
$$

同理可得

$$
(AA^a)\_{ij}=\delta_{ij}
$$

于是命题得证

---

现在，我们将这个结论用到线性方程组上：
考虑方程$Ax=b$，我们定义向量$\displaystyle{a_i:=\left(\begin{matrix}a_{1i}\\\\ \vdots \\\\ a_{ni}\end{matrix} \right)}$则有$A=(a_1,\cdots,a_n)$，考虑

$$
\begin{aligned}
(x)\_{i1}&=(A^{-1}b)\_{i1}
\\\\ &=\frac{\sum_{j}(A^{-1})\_{ij}b\_{j1}}{\det(A)}
\\\\ &=\frac{\sum_j A\_{ji} b\_{j1}}{\det(A)}
\end{aligned}
$$

于是如果我们定义

$$
\begin{aligned}
D&:=\det(A)
\\\\ D_i&:=\det(a_1,\cdots,a_{i-1},b,\cdots,a_n)
\end{aligned}
$$

则有

$$
x_i=\frac{D_i}{D}
$$

这给出了线性方程组求解的一种方法，称为**克莱默法则**
不难看出如果$\det(A)\neq0$，则方程有唯一解；如果$\det(A)=0$，则此时克莱默法则失效。如果$b=0$，则$x\in\ker A$，于是一定有解无限多个解；如果$b\neq 0$，此时的情况较复杂，需要根据具体情况讨论

## 4.迹

对于一个方阵，它的对角线元素之和我们定义为**迹**：

$$
\text{tr}(A):=\sum_{i=1}^n a_{ii}
$$

根据定义，显然它是一个线性泛函。考虑

$$
\sum_{i=j}(\sum_{k=1}^na_{ik}b_{kj})=\sum_i\sum_m a_{im}b_{mi}=\sum_{i=j}(\sum_{k=1}^na_{jk}b_{ki})
$$

所以有

$$
\text{tr}(AB)=\text{tr}(BA)
$$

这样就有

$$
\text{tr}(P^{-1}AP)=\text{tr}(APP^{-1})=\text{tr}(A)
$$

也就是说相似矩阵的迹相等

## 5.李括号

假定$A,B\in F^{n\times n}$，我们定义其**李括号**为

$$
[\cdot,\cdot]:F^{n\times n}\times F^{n\times n}\rightarrow F^{n\times n},(A,B)\longmapsto [A,B]
$$

它定义为

$$
[A,B] := AB-BA
$$

显然这个映射是双线性的，并且是反对称的。并且，我们有

$$
[A,I]=0
$$

此外，根据反对称形式的通常性质，有**雅可比恒等式**

$$
[[A,B],C]+[[B,C],A]+[[C,A],B]=0
$$

证明过程如下：

$$
\begin{aligned}
\text{LHS}&=[AB-BA,C]+[BC-CB,A]+[CA-AC,B]
\\\\&=ABC-BAC-CAB+BAC+CBA-CBA-ABC
\\\\&\quad+ACB+CAB-ACB-BCA+BAC
\\\\&=0
\end{aligned}
$$

此外，我们还有

$$
[AB,C]=A[B,C]+[A,C]B
$$

证明过程如下：

$$
\begin{aligned}
\text{RHS}&=ABC-ACB+ACB-CAB
\\\\&=ABC-CAB=\text{LHS}
\end{aligned}
$$

从中可以看出，李括号充当了微分算子的作用