我们首先从紧集入手，为了方便，下面我们只考虑闭盒子中的情况，并且只考虑二维的情况（更高维的同理）。首先我们有如下命题：

> 假定$D:=[a,b]\times[c,d]$,$f\in C(D)$，则函数
> $$
> F(y):=\int_{a}^{b}f(x,y)dx
> $$
>
> 满足$F\in C([c,d])$

这个证明只需要考虑到$f$在$D$上一致连续，从而
$$
\begin{aligned}
\left|F(y_{1})-F(y_{2})\right|&=\left|\int_{a}^{b}\left( f(x,y_{1})-f(x,y_{2}) \right)dx\right| \\\\
&\le\int_{a}^{b}\left|f(x,y_{1})-f(x,y_{2})\right|dx\\\\
&<\int_{a}^{b}\varepsilon dx=\varepsilon(b-a)
\end{aligned}
$$

即可

> 如果$f\in C(D)$，并且对于$y$有连续的偏导数，则$F\in C^{1}([c,d])$，并且
> $$
> F'(y)=\int_{a}^{b}\frac{\partial f}{\partial y}(x,y)dx
> $$

在证明这个结论时，令$g=\partial f/\partial y$，则利用
$$
f(x,y+h)-f(x,y)=h\int_{0}^{1}g(x,y+\theta h)d\theta
$$

以及
$$
h\frac{\partial f}{\partial y}(x,y)=h\int_{0}^{1}g(x,y)d\theta
$$

有
$$
\begin{aligned}
&\left|F(x,y+h)-F(x,y)-h\int_{a}^{b}\frac{\partial f}{\partial y}(x,y)dx\right|\\\\ 
=&\left|h\int_{a}^{b}\left( \int_{0}^{1}g(x,y+\theta h)d\theta-\int_{0}^{1}g(x,y)d\theta \right) dx\right| \\\\
=&\left|h\int_{a}^{b}\left( \int_{0}^{1}\left(g(x,y+\theta h)-g(x,y)\right)d\theta \right) dx\right| \\\\
\le&\left|h\int_{a}^{b}\left( \int_{0}^{1}\varepsilon d\theta \right) dx\right| =\varepsilon(b-a)|h|
\end{aligned}
$$

而导函数的连续性根据这个结果是不证自明的，从而证明了结论

类似的，我们可以加强结论：

> 如果$f\in C(D)$，并且对于$y$有连续偏导数，$\alpha,\beta\in C([c,d],[a,b])$，则
> $$
> F(y):=\int_{\alpha(y)}^{\beta(y)}f(x,y)dx
> $$
>
> 是连续可微的，并且
> $$
> F'(y)=f(\beta(y),y)\beta'(y)-f(\alpha(y),y)\alpha'(y)+\int_{\alpha(y)}^{\beta(y)}\frac{\partial f}{\partial y}(x,y)dx
> $$

证明这个结果是十分容易的，这里略去

对于含参变量积分的积分就是重积分的富比尼定理，因此这里不做介绍

对于反常积分的情况，我们可以采用一个函数项级数取逼近，从而定义一致收敛，再根据一致收敛的性质得到含参变量积分的性质。例如，对于积分
$$
F(y):=\int_{a}^{\infty}f(x,y)dx
$$

我们可以定义
$$
F_{n}(y):=\int_{a}^{a+n}f(x,y)dx
$$

如果$F_{n}$一致收敛到$F$，那么依据一致收敛的定义它有
$$
\lim_{n\rightarrow\infty}F_{n}(y)=F(y)
$$

而我们可以拿将含参变量积分的性质应用到$F_{n}$上，从而得出$F$的性质，具体结果不在赘述
