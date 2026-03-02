## 1.刚体运动

为例方便我们下面的讨论都限定在空间$F^{n}$中，其中$F=\mathbb{R}$或$\mathbb{C}$，假定$A\subseteq F^{n}$，我们称满射
$$
r:A\times\mathbb{R}\longmapsto F^{n}
$$

是刚体运动，如果它满足$r$对于$\mathbb{R}$是连续映射，并且对于任意$p,q\in A$，都有
$$
\\|r(p,t)-r(q,t)\\|=\\|p-q\\|
$$

并且对任意$p\in A$都有
$$
r(p,0)=p
$$

这样的定义能够防止手性的出现。现在，我们需要证明如下结论：

> 任何刚体运动都可以写为如下形式：
> $$
> r(p,t)=T(t)(p)+b(t)
> $$
>
> 其中$T(t)$是一个连续的线性映射，并且是等距同构，$b$是某个和$p$无关的向量

显然只需要证明任意等距映射$r$都可以写为
$$
r(p)=Tp+b
$$

的形式即可，这里天然要求$T$的等距的。考虑$b:=r(0)$，以$r-r(0)$代替$r$，只需要证明$r$是线性映射即可。为此考虑
$$
\begin{aligned}
\\|r(x+y)-r(x)-r(y)\\|^{2}=&\\|x+y\\|^{2}+\\|x\\|^{2}+\\|y\\|^{2}+2\langle r(x+y),r(x)\rangle  \\\\
&-2\langle r(x+y),r(y)\rangle +2\langle r(x),r(y)\rangle \\\\
=&\\|x+y\\|^{2}+\\|x\\|^{2}+\\|y\\|^{2}-2\langle x+y,y\rangle \\\\&-2\langle x+y,y\rangle +2\langle x,y\rangle \\\\
=&\\|x\\|^{2}+\\|y\\|^{2}-\\|x+y\\|^{2}+2\langle x,y\rangle \\\\
=&0
\end{aligned}
$$

以及
$$
\begin{aligned}
\\|r(\lambda x)-\lambda r(x)\\|^{2}&=\\|r(\lambda x)\\|^{2}+\lambda^{2}\\|r(x)\\|^{2}-2\lambda\langle r(\lambda x),r(x)\rangle\\\\
&=\lambda^{2}\\|x\\|^{2}+\lambda^{2}\\|x\\|^{2}-2\lambda^{2}\\|x\\|^{2} \\\\
&=0
\end{aligned}
$$

因此$r$是线性映射，从而我们可以得到上面的结论

## 2.平移

我们先从最简单的平移入手。对于平移群$\mathbb{R}^{n}$，显然它是一个$n$维流形，并且是交换群，于是它的李代数就是单位元处的切空间，生成元为$e_{i}$为标准基。如果采用流形的语言，那么其生成元为切空间的标准基，即
$$
X_{i}=\frac{\partial }{\partial x_{i}}
$$

对于它的不可约表示，考虑映射
$$
\rho:\mathbb{R}^{n}\rightarrow \mathbb{C}^{\times},\boldsymbol{a}\longmapsto e^{i\boldsymbol{k}\cdot\boldsymbol{a}}
$$

我们定义群在集合$L^{2}(\mathbb{R}^{n})$上的作用为
$$
(\rho(\boldsymbol{a})\cdot f)(\boldsymbol{x}):=f(\boldsymbol{x}-\boldsymbol{a})
$$

则它可以分解为不可约表示的直和，即
$$
f(\boldsymbol{x})=\frac{1}{(2\pi)^{n/2}}\int_{\mathbb{R}^{n}}\hat{f}(\boldsymbol{k})e^{i\boldsymbol{k}\cdot\boldsymbol{x}}d^{n}\boldsymbol{k}
$$

这就是傅里叶变换

## 3.旋转

现在我们考虑刚体运动的线性部分，即$r(p)=Rp$，并且满足
$$
R^{\dagger}R=I
$$

如果$R\in SU(n)$，则它总共包含$2n^{2}$个参数，但是从正交性中可以有
$$
n+\frac{n^{2}-n}{2}\times2=n^{2}
$$

个约束条件，此外再考虑到其行列式必须为正，需要再加上一个约束条件，最终可以得出其维数为$n^{2}-1$（之所以要加上一个约束，是因为原先只能得到$|\det(R)|=1$，而$\det(R)=1$需要加上幅角的约束，这是另一个约束条件）

对于$R\in SO(n)$，则有$n^{2}$个参数，以及$n(n+1)/2$个约束，因此维度为$n(n-1)/2$（这里不需要加上约束条件，是因为$\det(R)=1$只是选取了两个连通分支中的一个，并没有减少维数）

下面我们只讨论实际用得到的$SO(2)$和$SO(3)$，对于$SU(2)$和$SO(4)$这些如果有机会再补充

关于$SO(2)$的不可约表示，不难看出它等于$e^{in\theta},n\in\mathbb{Z}$相应的，圆环上的函数可以分解为不可约表示的直和，这也就是傅里叶级数

## 4.二维旋转

对于$SO(2)$而言，它的维数为$1$，即存在唯一的变量$\theta$，使得其中的任何元素都可以写为$R=R(\theta)$，为了方便我们令$R(0)=I$，作为连续群，我们假定
$$
R(\theta)=I+J\theta+o(\theta)
$$

这样就需要
$$
I+\left( J+J^{T} \right)\theta+o(\theta)=I
$$

因此有
$$
J^{T}=-J
$$

也就是说生成元是一个反对称矩阵。由于乘以某个系数只会导致流形的缩放，因此我们可以写出生成元为
$$
J=\begin{pmatrix}
0&-1\\\\ 1&0
\end{pmatrix}
$$

于是
$$
R(\theta)=\exp\left( \theta J \right)=\begin{pmatrix}
\cos\theta&-\sin\theta\\\\ \sin\theta&\cos\theta
\end{pmatrix}
$$

由于李代数是一维的，因此显然$SO(2)$是交换群

## 5.三维旋转

$SO(3)$是三维流形，因此可以用参数$\theta,\varphi,\omega$来表示，于是有（下面为了方便直接写约等号）
$$
R(\theta,\varphi,\omega)\approx I+\theta J_{1}+\varphi J_{2}+\omega J_{3}
$$

于是类似的可以得出$J_{1},J_{2},J_{3}$都是反对称矩阵，这意味着$R$一定可以写为$e^{M}$的形式，其中$M$是一个反对称矩阵。显然，一般的反对称矩阵可以写为
$$
M=\begin{pmatrix}
0&-a_{3}&a_{2}\\\\ a_{3}&0&-a_{1} \\\\ -a_{2}&a_{1}&0
\end{pmatrix}
$$

显然$M$有一个实特征值$0$和两个纯虚的特征值，对应的$e^{M}$有一个实特征值$1$和两个模长为$1$的复特征值。因此，存在一维子空间，其中的任意向量在$R$的作用下保证不变，这个子空间称为旋转轴，显然可以取
$$
\boldsymbol{n}=\left( n_{1},n_{2},n_{3} \right)
$$

的形式，并且$\\|\boldsymbol{n}\\|=1$，它是一个二维子流形，因此对于旋转轴相等的旋转，这个等价类是一个一维子流形，即可以用参数$\theta$唯一确定。于是考虑
$$
R_{\boldsymbol{n}}:=\\{R(\boldsymbol{n},\theta)|\theta\in\mathbb{R}\\}
$$

则有
$$
R\in R_{\boldsymbol{n}}\Rightarrow R^{T}\in R_{\boldsymbol{n}}
$$

于是$R_{\boldsymbol{n}}$存在逆元，此外，由于
$$
R_{1},R_{2}\in R_{\boldsymbol{n}}\Rightarrow R_{1}n=n,R_{2}n=n\Rightarrow R_{1}R_{2}=n\Rightarrow R_{1}R_{2}\in R_{\boldsymbol{n}}
$$

因此满足结合律，最后$I\in R_{\boldsymbol{n}}$，于是存在单位元，因此$R_{\boldsymbol{n}}$也是一个群。考虑到它是连续群，同样可以有
$$
R(\boldsymbol{n},\theta)\approx I+\theta J_{\boldsymbol{n}}
$$

这里要求$J_{\boldsymbol{n}}$是反对称矩阵且行列式为$1$，于是经过计算我们可以得出
$$
R(\boldsymbol{n},\theta)=I+\sin\theta J_{\boldsymbol{n}}+(1-\cos\theta)J_{\boldsymbol{n}}^{2}
$$

不难证明
$$
R(\boldsymbol{n},\theta)R(\boldsymbol{n},\varphi)=R(\boldsymbol{n},\theta+\varphi)
$$

也就是说我们可以证明$R_{\boldsymbol{n}}$本身表示的也是一系列旋转。不难发现
$$
J_{\boldsymbol{n}}\boldsymbol{n}=0
$$

采用前面$M$的记号，则有
$$
\begin{aligned}
-a_{3}n_{2}+a_{2}n_{3}&=0 \\\\
a_{3}n_{1}-a_{1}n_{3}&=0\\\\ 
-a_{2}n_{1}+a_{1}n_{2}&=0\\\\
a_{1}^{2}+a_{2}^{2}+a_{3}^{2}&=1
\end{aligned}
$$

于是取正号有
$$
a_{1}=n_{1},a_{2}=n_{2},a_{3}=n_{3}
$$

从而
$$
J_{\boldsymbol{n}}=\begin{pmatrix}
0&-n_{3}&n_{2}\\\\ n_{3}&0&-n_{1} \\\\ -n_{2}&n_{1}&0
\end{pmatrix}=[\boldsymbol{n}]_{\times}
$$

从而有
$$
R(\boldsymbol{n},\theta)=I+\sin\theta [\boldsymbol{n}]_{\times}+(1-\cos\theta)[\boldsymbol{n}]\_{\times}^{2}
$$

这个公式被称为Rodrigues公式。显然，我们有
$$
J_{\boldsymbol{n}}=n_{1}J_{1}+n_{2}J_{2}+n_{3}J_{3}
$$

其中
$$
J_{1}=\begin{pmatrix}
0&0&0\\\\0&0&-1\\\\0&1&0
\end{pmatrix},J_{2}=\begin{pmatrix}
0&0&1\\\\0&0&0\\\\-1&0&0
\end{pmatrix},J_{3}=\begin{pmatrix}
0&-1&0\\\\1&0&0\\\\0&0&0
\end{pmatrix}
$$

为生成元，具体的生成关系为
$$
R(\boldsymbol{n},\theta)\approx I+\theta n_{1}J_{1}+\theta n_{2}J_{2}+\theta n_{3}J_{3}=\exp\left( \theta\boldsymbol{n}\cdot\boldsymbol{J} \right)
$$

不难验证得到
$$
[J_{i},J_{k}]=\sum_{k}\varepsilon_{ijk}J_{k}
$$

<!-- SO3的表示：球谐函数 -->
<!-- SO3的耦合 -->
<!-- 四元数和SU2 -->

