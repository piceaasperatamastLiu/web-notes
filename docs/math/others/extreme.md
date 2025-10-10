## 1. 中值定理

我们讨论的基石是**拉格朗日定理**：

> 考虑$f\in C([a,b])$，如果$f$在$(a,b)$上可微，则存在$c\in(a,b)$，使得
> $$
> f(b)-f(a)=f'(c)(b-a)
> $$

这个定理的证明方式大家都知道。而我们可以由此得到另一个定理，即泰勒定理。首先我们定义$a$处的泰勒多项式：
$$
P_{n}(x;a;f)=P_{n}(x):=f(a)+\sum_{k=1}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^{k}
$$

那么便有泰勒定理：

> 如果$f$在$a$处存在$n$阶导数（因此泰勒多项式$P_{n}$存在），那么存在函数$R_{n}=f-P_{n}$，使得
> $$
> \lim_{x\rightarrow a}\frac{R_{n}(x)}{(x-a)^{n}}=0
> $$

泰勒定理的另一种更加常见的形式如下：

> 如果$f\in C^{n}([a,b])$，并且在$(a,b)$上$n+1$阶可微，那么存在$c\in (a,b)$，使得
> $$
> f(b)=P_{n}(b;a;f)+\frac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}
> $$

以及最强的形式为

> 如果$f\in C^{n+1}([a,b])$，那么
> $$
> f(b)=P_{n}(b;a;f)+\int_{a}^{b}\frac{f^{(n+1)}(t)}{n!}(x-t)^{n}dt
> $$

## 2.一元函数的极值

现在，我们将中值定理应用到极值的研究上。根据费马引理，我们知道极值点的导数为0.假定$f'(a)=0$，我们需要考虑其是否为极值点，为此假设$a$处的二阶导数存在，则
$$
f(x)=f(a)+\frac{f''(a)}{2}(x-a)^{2}+R(x)
$$

其中$R(x)/(x-a)^{2}\rightarrow0$表示存在$a$的邻域$U$，使得在$U$上有
$$
|R(x)|<\varepsilon (x-a)^{2}
$$

取$\varepsilon=f''(a)/4$，那么有
$$
f(x)\ge f(a)+\frac{f''(a)}{2}(x-a)^{2}-\frac{f''(a)}{4}(x-a)^{2}=f(a)+\frac{f''(a)}{4}(x-a)^{2}\ge f(a)
$$

从而是极小值。类似的，从$f''(a)<0$中可以得出$a$是极大值点。

如果$f''(a)=0,f'''(a)\neq 0$，那么不难证明$f$在$a$处的某个邻域内是单调的，从而不是极值点。可以简单地将上述过程运用数学归纳法推广到一般的情况，这里不再赘述

## 3.有限增量定理

现在考虑一般的赋范空间上的情况，我们有**有限增量定理**：

> 假定$U\subseteq X$是凸的开集，$x\in U$，如果对于向量$h\in X$有$x+h\in U$，并且$f\in C(U)$是可微的，那么存在$t\in(0,1)$，使得
> 
> $$
> \\|f(x+h)-f(x)\\|\le\sup_{t\in(0,1)}\\|f'(x+th)\\|\\|h\\|
> $$

这个定理的证明思路如下：考虑映射
$$
\phi:[0,1]\rightarrow Y,t\longmapsto f(x+th)
$$

则有
$$
\phi'(t)=f'(x+th)h
$$

于是对于$\phi$的像的每个分量$\phi_{m}$有
$$
\phi_{m}(1)-\phi_{m}(0)=\int_{0}^{1}\phi'_{m}(t)dt
$$

进而可以得出
$$
f(x+h)-f(x)=\int_{0}^{1}f'(x+th)hdt
$$

从而
$$
\\|f(x+h)-f(x)\\|\le\int_{0}^{1}\\|f'(x+th)h\\|dt\le\\|h\\|\int_{0}^{1}\\|f'(x+th)\\|dt
$$

最后考虑$f'$的范数的上确界即可。值得注意的是，如果$\dim Y=1$，那么以上结论的证明可以直接基于链式法则和一元情况下的中值定理，之所以这里采取积分的方式是为了避开像是多维的情况下取不到同一个点的问题

---

下面给出多元函数的泰勒定理：

> 对于开集$U\subseteq X$，考虑$f\in C(U)$，如果$f$在$x\in U$处存在$n$阶导数，则存在映射$R_{n}\in C(X)$，使得对于任意$h\in X$，如果$x+h\in U$则有
> $$
> f(x+h)=f(x)+\sum_{k=1}^{n}\frac{1}{k!}f^{(k)}(x)[h]^{k}+R_{n}(h)
> $$
> 其中$R_{n}$满足
> $$
> \lim_{\\|h\\|\rightarrow 0}\frac{\\|R_{n}(h)\\|}{\\|h\\|^{n}}=0
> $$

注意这里的$f^{(k)}(x)$是一个$(0,k)$型张量，而$f^{(k)}(x)[h]^{k}$是对爱因斯坦求和约计的简写。例如，对于$k=2$，有
$$
f''(x)[h]^{2}=\left( f''(x) \right)_{ij}h^{i}h^{j}
$$

泰勒定理当然还有更多的形式，但是这里我们只需要用到这个形式即可。为了证明这个定理，我们采用数学归纳法：对于$n=1$有
$$
f(x+h)=f(x)+f'(x)h+R(h)
$$

利用导数的定义很容易得出$\\|R(h)\\|/\\|h\\|\rightarrow0$.如果对于$n=k$成立，那么考虑
$$
\begin{aligned}
\\|R_{k+1}(h)\\|\le&\\|f(x+h)-f(x)-\sum_{i=1}^{k+1}f^{(i)}(x)[h]^{i}/i!\\| \\\
\le &\sup_{t\in(0,1)}\\|f'(x+th)-\sum_{i=1}^{k+1}f^{(i)}(x)[th]^{i-1}/(i-1)!\\|\\|h\\| \\\
=&\\|R_{k}(h)\\|\\|h\\|
\end{aligned}
$$

即可得出$\\|R_{k+1}(h)\\|/\\|h\\|^{k+1}\rightarrow0$的结论

## 4.多元函数的极值

现在考虑$\dim Y=1$的情况，首先对于极值点，考虑任意两个相反方向的方向导数，不难得出其所有偏导数为$0$，从而可以得到$f'(x)=0$的结论。现在，考虑$f''(x)$不为零矩阵的情况，此时
$$
f(x+h)=f(x)+\frac{1}{2}h^{T}f''(x)h+R(h)
$$

为了方便我们只考虑$f\in C^{2}(U)$的情况，此时$f''(x)$是对称的，从而可以选定一组正交的基$e_{i}$使得
$$
\langle e_{i},e_{j}\rangle=\delta_{ij} 
$$

此时
$$
f''(x)=\text{diag}(\lambda_{1},\dots,\lambda_{n})
$$

再考虑
$$
h=\begin{pmatrix}
h_{1}\\\ \vdots \\\ h_{n}
\end{pmatrix}
$$

则有
$$
f(x+h)=f(x)+\frac{1}{2}\sum_{k=1}^{n}\lambda_{k}h_{k}^{2}+R(h)
$$

假设所有特征值均为正，则由于
$$
R(h)/\\|h\\|^{2}\rightarrow 0\Rightarrow R(h)\ge -\varepsilon\sum_{k=1}^{n}h_{k}^{2} \text{ for some open set }V
$$

从而只需要取到
$$
\varepsilon<\min\\{\lambda_{1},\dots,\lambda_{n}\\}/2
$$

即可证明$f(x+h)\ge f(x)$，即$x$是极小值点。类似的，如果所有特征值均小于$0$，可以得到$x$是极大值点。如果特征值中既有正数又有负数，不妨设$\lambda_{1}>0,\lambda_{2}<0$，那么取$h$沿$e_{1}$方向，不难得出
$$
\forall t\in \mathbb{R}\left( f(x+te_{1})\ge f(x) \right)
$$

类似的
$$
\forall t\in \mathbb{R}\left( f(x+te_{2})\le f(x) \right)
$$

所以$x$一定不是极值点。如果特征值存在$0$，则以上讨论全部失效。对于更高阶的判别法，可以沿用以上的讨论思路，这里不做介绍

## 5.条件极值

条件极值问题实际上和我们的上下文关系不大，但是为了叙述的完整性这里还是介绍一下：

> 对于开集$U\subseteq X,\dim X\ge2$，如果$f,g\in C^{1}(U)$，$a\in U$是$f$在$g(x)=0$这一约束条件下的极值点，并且$g'(a)\neq 0$，那么存在实数$\lambda$使得拉格朗日函数
> $$
> \mathcal{L}(x):=f(x)-\lambda g(x)
> $$
>
> 满足$\mathcal{L}'(a)=0$

显然，这个结论只是给出了极值点的必要条件。为了证明这个定理，我们对于$p$点使用隐函数定理，假定$\dim X=n=m+1$，并假设
$$
X=Y\times Z,\dim Y=m
$$

这样就有$x=(y,z),z\in\mathbb{R}$，假定$a=(b,c)$，根据隐函数定理，存在$b$的邻域$V$和唯一的映射$\phi:V\rightarrow\mathbb{R}$，使得
$$
\forall y\in V(g(y,\phi(y))=0)
$$

考虑
$$
F(y):=f(y,\phi(y)),F'(y)=\frac{\partial f}{\partial y}+\frac{\partial f}{\partial z}\phi'(y)
$$

另一方面，根据隐函数定理
$$
\phi'(y)=-\frac{\partial g}{\partial y}/\frac{\partial g}{\partial z}
$$

令
$$
\lambda:=\frac{\partial f}{\partial z}/\frac{\partial g}{\partial z} \text{ where }z=\phi(b)
$$

那么就有在$y=b$时
$$
\frac{\partial f}{\partial y}=\lambda\frac{\partial g}{\partial y}
$$

这两个式子组合起来就是
$$
f'(a)=\lambda g'(a)
$$
