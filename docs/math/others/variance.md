我们需要证明如下命题：

> 假定$X_{i}\sim N(\mu,\sigma^{2})$，并且相互独立，则方差
> $$
> S^{2}:=\frac{1}{n-1}\sum_{i=1}^{n}\left( X_{i}-\overline{X} \right)^{2}
> $$
>
> 是无偏估计，其中
> $$
> \overline{X}:=\frac{1}{n}\sum_{i=1}^{n}X_{i}
> $$
>
> 为均值

为了证明这个结论，我们注意到$S^{2}$是$X_{1},\dots,X_{n}$的一个二次型，从而给出如下引理：

> $(n-1)S^{2}$为二次型，其对应的矩阵为
> $$
> A:=\begin{pmatrix}
> 1-\frac{1}{n}&\cdots&-\frac{1}{n}\\\\
> \vdots&\ddots&\vdots\\\\
> -\frac{1}{n}&\cdots&1-\frac{1}{n}
> \end{pmatrix}
> $$

为了证明这个结论，我们只需要注意到
$$
\begin{aligned}
(n-1)S^{2}&=\sum_{i=1}^{n}\left( X_{i}-\overline{X} \right)^{2} \\\\
&=\sum_{i=1}^{n}X_{i}^{2}-n\overline{X}^{2}\\\\
&=\sum_{i=1}^{n}X_{i}^{2}-\frac{1}{n}\left( \sum_{i=1}^{n}X_{i} \right)^{2}\\\\
&=\sum_{i=1}^{n}X_{i}^{2}-\frac{1}{n}\left( \sum_{i=1}^{n}X_{i}^{2}+\sum_{i,j=1;i\neq j}^{n}X_{i}X_{j} \right)\\\\
&=\left( 1-\frac{1}{n} \right)\sum_{i=1}^{n}X_{i}^{2}-\frac{2}{n}\sum_{i,j=1;i<j}^{n}X_{i}X_{j}
\end{aligned}
$$

即可。现在，我们引入如下引理：

> 定义随机变量
> $$
> X:=\sum_{i=1}^{n}a_{i}X_{i},Y:=\sum_{i=1}^{n}b_{i}X_{i}
> $$
>
> 则有
> $$
> \text{Cov}(X,Y)=\sigma^{2}\sum_{i=1}^{n}a_{i}b_{i}=\sigma^{2}\langle a,b\rangle 
> $$

为了证明这个结论，我们需要注意到
$$
E(X)=\mu\sum_{i=1}^{n}a_{i},E(Y)=\mu\sum_{i=1}^{n}b_{i}
$$

以及
$$
\begin{aligned}
E(XY)&=E\left( \sum_{i=1}^{n}a_{i}X_{i}\sum_{j=1}^{n}b_{j}X_{j} \right) \\\\
&=E\left( \sum_{i=1}^{n}a_{i}b_{i}X_{i}^{2}+\sum_{i,j=1;i\neq j}^{n}a_{i}b_{j}X_{i}X_{j} \right)\\\\
&=\sum_{i=1}^{n}a_{i}b_{i}E(X_{i}^{2})+\sum_{i,j=1;i\neq j}^{n}a_{i}b_{j}E(X_{i}X_{j})
\end{aligned}
$$

考虑到$D(X_{i})=\sigma^{2}$，有$E(X_{i}^{2})=\mu^{2}+\sigma^{2}$；同理，考虑到$\text{Cov}(X_{i},X_{j})=\sigma^{2}\delta_{ij}$有$i\neq j$时$E(X_{i}X_{j})=\mu^{2}$，于是
$$
E(XY)=\left( \sigma^{2}+\mu^{2} \right)\langle a,b\rangle+\mu^{2}\sum_{i,j=1;i\neq j}^{n} a_{i}b_{j}
$$

于是
$$
\begin{aligned}
\text{Cov}(X,Y)&=\left( \sigma^{2}+\mu^{2} \right)\langle a,b\rangle+\mu^{2}\sum_{i,j=1;i\neq j}^{n} a_{i}b_{j}-\mu^{2}\sum_{i=1}^{n}a_{i}\sum_{j=1}^{n}b_{j} \\\\
&=\left( \sigma^{2}+\mu^{2} \right)\langle a,b\rangle+\mu^{2}\sum_{i,j=1;i\neq j}^{n} a_{i}b_{j}-\mu^{2}\left( \langle a,b\rangle +\sum_{i,j=1;i\neq j}^{n}a_{i}b_{j} \right)\\\\
&=\sigma^{2}\langle a,b\rangle 
\end{aligned}
$$

从而证明了上述引理。事实上，对于一般的简单随机样本，以上引理也成立，它表明两个简单随机样本的线性函数无关当且仅当它们的系数是正交的。现在，我们寻求线性变换
$$
Y_{j}=\sum_{i=1}^{n}a_{ij}X_{i}
$$

则变换矩阵是正交的，当且仅当
$$
\text{Cov}(Y_{i},Y_{j})=\sigma^{2}\delta_{ij}
$$

而这允许我们将$S^{2}$写为满足$\chi^{2}$分布的形式，为此我们需要写出二次型的标准型，从而需要证明如下引理：

> 矩阵$A$的特征值为
> $$
> \lambda_{1}=0,\lambda_{2}=\cdots=\lambda_{n}=1
> $$
>
> 并且
> $$
> \text{nullity}(A)=1,\text{nullity}(A-I)=n-1
> $$
>
> 也就是说$A$是可以对角化的

这个结论的证明是非常简单的，只需要计算特征多项式即可，这里直接略去。现在，我们可以将$(n-1)^{2}$写为
$$
(n-1)S^{2}=Y_{2}^{2}+\cdots+Y_{n}^{2}
$$

由于我们可以对$\ker(A-I)$中的向量进行正交化，根据上面的定理我们有
$$
\text{Cov}(Y_{i},Y_{j})=\sigma^{2}\delta_{ij}
$$

最后，由于从属于特征值$0$和$1$的特征向量相互相交，而显然$(1,\cdots,1)^{T}$是特征值$0$的一个特征向量，对于
$$
Y_{i}=\sum_{j=1}^{n}a_{ij}X_{j}
$$

当$i\neq 1$时我们有
$$
\sum_{j=1}^{n}a_{ij}=0
$$

从而
$$
E(Y_{i})=\mu\sum_{j=1}^{n}a_{ij}=0
$$

也就是说
$$
\frac{(n-1)S^{2}}{\sigma^{2}}\sim\chi^{2}(n-1)
$$

考虑到服从$\chi^{2}(n-1)$分布的期望为$n-1$，我们有
$$
E(S^{2})=\sigma^{2}
$$

这也就证明了无偏性
