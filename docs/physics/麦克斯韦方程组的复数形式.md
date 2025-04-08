# 麦克斯韦方程组的复数形式

声明：下面所有的讨论均基于$c=\varepsilon_{0}=\mu_{0}=1$的自然单位制，并且只讨论真空中的情况；度规取为$(\eta_{\mu\nu})=\text{diag}(1,-1,-1,-1)$，傅里叶变换的系数放在逆变换中

## 1.电磁场的傅里叶变换

考虑电场$\boldsymbol{E}(\boldsymbol{r},t)$，将其展开为
$$
\boldsymbol{E}(\boldsymbol{r},t)=\int_{-\infty}^{\infty}\boldsymbol{E}(\boldsymbol{r})e^{-i\omega t}dt
$$

这样的话
$$
\frac{\partial \boldsymbol{E}(\boldsymbol{r},t)}{\partial t}=-i\omega\int_{-\infty}^{\infty}\boldsymbol{E}(\boldsymbol{r},\omega)e^{-i\omega t}dt
$$

于是采取类似的方式，我们可以将麦克斯韦方程组写为
$$
\begin{aligned}
\nabla\cdot\boldsymbol{E}(\boldsymbol{r},\omega)&=\rho(\boldsymbol{r},\omega) \\\
\nabla\cdot\boldsymbol{B}(\boldsymbol{r},\omega)&=0\\\
\nabla\times\boldsymbol{E}(\boldsymbol{r},\omega)&=i\omega\boldsymbol{B}(\boldsymbol{r},\omega)\\\
\nabla\times\boldsymbol{B}(\boldsymbol{r},\omega)&=\boldsymbol{j}(\boldsymbol{r},\omega)-i\omega\boldsymbol{E}(\boldsymbol{r},\omega)
\end{aligned}
$$

再对空间分量作傅里叶变换，即
$$
\boldsymbol{E}(\boldsymbol{r},\omega)=\int  \boldsymbol{E}(\boldsymbol{k},\omega)e^{i\boldsymbol{k}\cdot\boldsymbol{r}}d^3\boldsymbol{k}
$$

于是
$$
\nabla\cdot\boldsymbol{E}=\int\boldsymbol{E}(\boldsymbol{k},\omega)\cdot\nabla e^{i\boldsymbol{k}\cdot\boldsymbol{r}}d^3\boldsymbol{k}=\int i\boldsymbol{k}\cdot\boldsymbol{E}(\boldsymbol{k},\omega)e^{i\boldsymbol{k}\boldsymbol{r}}d^3\boldsymbol{k}
$$

以及
$$
\nabla\times\boldsymbol{E}=\int\nabla e^{i\boldsymbol{k}\cdot\boldsymbol{r}}\times\boldsymbol{E}(\boldsymbol{k},\omega)d^3\boldsymbol{k}=\int i\boldsymbol{k}\times\boldsymbol{E}(\boldsymbol{k},\omega)e^{i\boldsymbol{k}\cdot\boldsymbol{r}}d^3\boldsymbol{k}
$$

于是麦克斯韦方程组改写为
$$
\begin{aligned}
i\boldsymbol{k}\cdot\boldsymbol{E}(\boldsymbol{k},\omega)&=\rho(\boldsymbol{k},\omega) \\\
\boldsymbol{k}\cdot\boldsymbol{B}(\boldsymbol{k},\omega)&=0\\\
\boldsymbol{k}\times\boldsymbol{E}(\boldsymbol{k},\omega)&=\omega\boldsymbol{B}(\boldsymbol{k},\omega)\\\
i\boldsymbol{k}\times\boldsymbol{B}(\boldsymbol{k,\omega})&=\boldsymbol{j}(\boldsymbol{k},\omega)-i\omega\boldsymbol{E}(\boldsymbol{k},\omega)
\end{aligned}
$$

## 2.静电场情形

静电场情况下$\boldsymbol{j}=0,\boldsymbol{B}=0$，麦克斯韦方程组为
$$
\begin{aligned}
i\boldsymbol{k}\cdot\boldsymbol{E}(\boldsymbol{k},\omega)&=\rho(\boldsymbol{k},\omega)\\\
\boldsymbol{k}\times\boldsymbol{E}(\boldsymbol{k},\omega)&=0
\end{aligned}
$$

考虑傅里叶逆变换
$$
\rho(\boldsymbol{k},\omega)=\frac{1}{(2\pi)^{3}}\int q\delta^3(\boldsymbol{r}-\boldsymbol{r}_{0})e^{-i\boldsymbol{k}\cdot\boldsymbol{r}}d^{3}\boldsymbol{r}=\frac{q}{(2\pi)^{3}}e^{{-i\boldsymbol{k}\cdot\boldsymbol{r}\_{0}}}
$$

注意到其中第二个公式表明$\boldsymbol{E}$的傅里叶分量和波的方向相同，即为纵波，令$\boldsymbol{E}=\lambda\boldsymbol{k}$，有
$$
i\lambda k^2=\frac{q}{(2\pi)^{3}}e^{-i\boldsymbol{k}\cdot\boldsymbol{r}_{0}}
$$

于是
$$
\boldsymbol{E}=-\frac{iq}{(2\pi)^{3}}\frac{e^{-i\boldsymbol{k}\cdot\boldsymbol{r}_{0}}}{k^2}\boldsymbol{k}
$$


## 3.电磁波情况

对于电磁波，有
$$
\begin{aligned}
\boldsymbol{k}\cdot\boldsymbol{E}&=0 \\\
\boldsymbol{k}\cdot\boldsymbol{B}&=0\\\
\boldsymbol{k}\times\boldsymbol{E}&=\omega\boldsymbol{B}\\\
\boldsymbol{k}\times\boldsymbol{B}&=-\omega\boldsymbol{E}
\end{aligned}
$$

对第三个公式两边叉乘$\boldsymbol{k}$有
$$
-\boldsymbol{k}^2\boldsymbol{E}=-\omega^2\boldsymbol{E}
$$

也就是说
$$
\boldsymbol{k}^2=\omega^2
$$

## 4.对势的傅里叶变换

我们知道$(\omega,\boldsymbol{k})$可以构成一个四维矢量$k^{\mu}$，并且对于电磁波有
$$
k^{\mu}k_{\mu}=0
$$

现在我们寻求直接对$A^{\mu}$的变换，也就是说
$$
A^{\mu}(x)=\int A^{\mu}(k)e^{-ik_{\mu}x^{\mu}}d^4k_{\mu}
$$

考虑电磁场张量
$$
F_{\mu\nu}=\partial_{\mu}A_{\nu}-\partial_{\nu}A_{\mu}
$$

可以得出
$$
F_{\mu\nu}(x)=-i\int d^4k_{\mu}\left(k_{\mu}A_{\nu}(k)-k_{\nu}A_{\mu}(k)  \right)e^{-ik_{\mu}x^{\mu}}
$$

于是电磁场张量相应于$-i(k_{\mu}A_{\nu}(k)-k_{\nu}A_{\mu}(k))$，而考虑
$$
\partial_{\lambda}F_{\mu\nu}=-ik_{\lambda}(k_{\mu}A_{\nu}(k)-k_{\nu}A_{\mu}(k))
$$

从而很容易地得出第一队麦克斯韦方程组为恒等式。再来考虑第二队麦克斯韦方程组
$$
\partial_{\mu}F^{\mu\nu}=-j^{\nu}=-ik_{\mu}\times(-i)(k^{\mu}A^{\nu}(k)-k^{\nu}A^{\mu}(k))
$$

于是
$$
k_{\mu}k^{\mu}A^{\nu}(k)-k_{\mu}A^{\mu}(k)k^{\nu}=j^{\nu}(k)
$$

## 5.应用于电磁波

我们知道电磁波一定满足洛伦兹规范
$$
\partial_{\mu}A^{\mu}=0
$$

虽然洛伦兹规范不能消除所有的冗余。容易发现其对应的形式为
$$
k_{\mu}A^{\mu}(k)=0
$$

这样我们便可以得出
$$
k_{\mu}k^{\mu}=0
$$

的结论
