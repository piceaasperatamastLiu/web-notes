第二类欧拉积分定义为
$$
\Gamma(z):=\int_{0}^{\infty}t^{z-1}e^{-t}dt
$$

显然，对于$\Re(z)>0$的所有情况，这个积分都是有意义的。以下我们仅讨论$z$的实部大于1的情况。考虑到
$$
\int_{0}^{\infty}t^{z}e^{-t}dt=-\left. t^{z}e^{-t}\right|^{\infty}_{0} +z\int\_{0}^{\infty}t^{z-1}e^{-t}dt
$$

有
$$
\Gamma(z)=(z-1)\Gamma(z-1)
$$

不难看出$\Gamma(1)=1$，从而
$$
\Gamma(n)=(n-1)!,n\in\mathbb{N}
$$

这个结果的直接结论是
$$
\int_{0}^{\infty}x^{n}e^{-x}dx=n!,n\in\mathbb{N}
$$

---

第一类欧拉积分定义为
$$
B(x,y):=\int_{0}^{1}t^{x-1}(1-t)^{y-1}dt
$$

考虑
$$
\begin{aligned}
\Gamma(x)\Gamma(y)&=\int_{0}^{\infty}s^{x-1}e^{-s}ds\int_{0}^{\infty}t^{y-1}e^{-t}dt \\\\
&=\int_{0}^{\infty}ds\int_{0}^{\infty}s^{x-1}t^{y-1}e^{-(s+t)}dt\\\\
&=\int_{0}^{\infty}ds\int_{0}^{s}(s-t)^{x-1}t^{y-1}e^{-s}dt\\\\
&=\int_{0}^{\infty}s^{x+y-1}e^{-s}ds \int_{0}^{1}(1-t)^{x-1}t^{y-1}dt\\\\
&=\Gamma(x+y)B(y,x)
\end{aligned}
$$

即可证明，这里我们先后用到了代换$s\longmapsto s+t$和$t\longmapsto t/s$.这个公式直接给出了计算$B$函数的方式。例如，对于$m,n\in\mathbb{N}\backslash\\{0\\}$，有
$$
B(m,n)=\frac{(m-1)!(n-1)!}{(m+n-1)!}
$$

---

现在，我们给出最为重要的一个结论，即**余元公式**：
$$
\Gamma(z)\Gamma(1-z)=\frac{\pi}{\sin\pi z},\Re(z)\in(0,1)
$$

显然这等价于
$$
B(z,1-z)=\frac{\pi}{\sin\pi z}
$$

也就是
$$
\int_{0}^{1}t^{-z}(1-t)^{z-1}dt=\frac{\pi}{\sin\pi z}
$$

作代换$t=1/u$，则我们需要证明
$$
I(z):=\int_{0}^{\infty}\frac{(u-1)^{z-1}}{u}du=\frac{\pi}{\sin\pi z}
$$

为了计算这个积分，我们利用柯西积分定理，选取如下围道：第一段$\gamma_{1}$沿实轴上侧从$\varepsilon$到$R$，$\gamma_{2}$为逆时针绕原点几乎一周、半径为$R$的圆，$\gamma_{3}$平行于实轴并沿实轴下侧，从$R$到$\varepsilon$，$\gamma_{4}$为顺时针绕原点一周的半径为$\varepsilon$的圆。于是对于$\gamma_{1}$，有
$$
\begin{aligned}
|I_{1}|&=\left|\int_{\gamma_{1}}\frac{(u-1)^{z-1}}{u}du\right| \\\\
&\le\sup_{\gamma_{1}}\left|\frac{(u-1)^{z-1}}{u}\right|2\pi R\\\\
&=2\pi\sup_{\gamma_{1}}\left|(u-1)^{z-1}\right|\le2\pi(R+1)^{\Re(z)-1}
\end{aligned}
$$

由于$\Re(z)<1$，于是在$R\rightarrow\infty$时$|I_{1}|\rightarrow0$，从而$I_{1}\rightarrow0$.再来考虑$I_{4}$，我们有
$$
\begin{aligned}
I_{4}&=\int_{\gamma_{4}}\frac{(u-1)^{z-1}}{u}du=e^{i\pi(z-1)}\int_{\gamma_{4}}\frac{(1-u)^{z-1}}{u}du\\\\
&=e^{i\pi(z-1)}\int_{\gamma_{4}}\left( \frac{1}{u}+1-z+\omicron(u) \right)du=-2\pi i e^{i\pi(z-1)}
\end{aligned}
$$

现在我们考虑$\gamma_{1}$上的积分，显然它就等于$I(z)$，而对于$\gamma_{3}$上的积分，需要注意到$1-u$存在$2\pi$的相位角的变化，于是
$$
I_{3}=-I_{1}e^{2\pi i(z-1)}
$$

从而
$$
I(z)-I(z)e^{2\pi i(z-1)}-2\pi ie^{i\pi(z-1)}=0
$$

即
$$
\begin{aligned}
I(z)&=\frac{2\pi ie^{i\pi(z-1)}}{1-e^{2\pi i(z-1)}}=\frac{2\pi i}{e^{-\pi i(z-1)}-e^{\pi i(z-1)}} \\\\
&=\frac{2\pi i}{e^{\pi iz}-e^{-\pi iz}}=\frac{\pi}{\sin \pi z}
\end{aligned}
$$

从而完成了余元公式的证明

---

余元公式的一个非常直接的结果是
$$
\Gamma\left( \frac{1}{2} \right)=\sqrt{\pi}
$$

因此更进一步地有
$$
\begin{aligned}
\Gamma\left( n+\frac{1}{2} \right)&=\left( n-\frac{1}{2} \right)\Gamma\left( n-1+\frac{1}{2} \right) \\\\
&=\sqrt{\pi}\left( n-\frac{1}{2} \right)\left( n-2+\frac{1}{2} \right)\cdots\frac{1}{2}\\\\
&=\frac{\sqrt{\pi}}{2^{n}}(2n-1)!!
\end{aligned}
$$

---

现在我们运用欧拉积分来求解一个具体的问题，即计算：
$$
I(m,n)=\int_{0}^{\pi/2}\sin^{m}x\cos^{n}xdx
$$

考虑$m,n\ge2$的情况，此时
$$
\begin{aligned}
I(m,n)&=\int_{0}^{1}x^{m}(1-x^{2})^{(n-1)/2}dx \\\\
&=\frac{1}{2}\int_{0}^{1}t^{(m-1)/2}(1-t)^{(n-1)/2}dt\\\\
&=\frac{1}{2}B\left( \frac{m+1}{2},\frac{n+1}{2} \right)
\end{aligned}
$$

可以证明，对于其它的情况，这个结果仍然成立。特别的，有
$$
\int_{0}^{\pi/2}\sin^{n}xdx=\frac{1}{2}B\left( \frac{n+1}{2},\frac{1}{2} \right)=\frac{\sqrt{\pi}}{n}\frac{\Gamma\left( \frac{n+1}{2} \right)}{\Gamma\left( \frac{n}{2} \right)}
$$

对于$n=2k$，有
$$
\int_{0}^{\pi/2}\sin^{n}xdx=\frac{\pi}{2}\frac{(2k-1)!!}{2^{k}k!}=\frac{\pi}{2}\frac{(2k-1)!!}{(2k)!!}
$$

对于$n=2k+1$，有
$$
\int_{0}^{\pi/2}\sin^{n}xdx=\frac{2^{k}k!}{(2k+1)!!}=\frac{(2k)!!}{(2k+1)!!}
$$
