# 热传递

## 基本原理

定义单位时间内通过单位面积的热量为$\boldsymbol{F}$，显然它和温度的梯度成正比，即
$$
\boldsymbol{F}=-\kappa\nabla T\tag{1}
$$

又因为热量可以用比热容$C$来表示，这里取为单位质量升高单位温度吸收的热量，即
$$
dQ=CdmdT=C\rho dVdT
$$

又因为
$$
dQ=-\boldsymbol{F}\cdot d\boldsymbol{S}dt
$$

因此有
$$
\nabla\cdot\boldsymbol{F}=-\rho C\frac{\partial T}{\partial t}\tag{2}
$$

最后就有
$$
\kappa\Delta T=\rho C\frac{\partial T}{\partial t}\tag{3}
$$

## 傅里叶变换

考虑傅里叶变换
$$
T(\boldsymbol{r},t)=\frac{1}{(2\pi)^{4}}\int \tau(\boldsymbol{k},\omega)e^{i(\omega t-\boldsymbol{k}\cdot\boldsymbol{r})}d\omega d^{3}\boldsymbol{k}\tag{4}
$$

有
$$
-\kappa k^{2}\tau(\boldsymbol{k},\omega)=i\rho C\omega \tau(\boldsymbol{k},\omega)
$$

即
$$
k=\pm\sqrt{-i\frac{\rho C\omega}{\kappa}}=\pm\sqrt{\frac{\rho C\omega}{2\kappa}}\left( 1-i \right)
$$

具体的正负号视传播方向而定。同时，可以得到
$$
\boldsymbol{F}=\frac{i\kappa}{(2\pi)^{4}}\int \boldsymbol{k}\tau(\boldsymbol{k},\omega)e^{i(\omega t-\boldsymbol{k}\cdot\boldsymbol{r})}d\omega d^{3}\boldsymbol{k}
$$

因此$\boldsymbol{F}$的傅里叶变换为
$$
\boldsymbol{f}(\boldsymbol{k},\omega)=i\kappa\boldsymbol{k}\tau(\boldsymbol{k},\omega)\tag{5}
$$

## 特殊情况：无限大平面，周期热源

只有一个自由度，假定为$z$，则
$$
f(k,\omega)=i\kappa k\tau(k,\omega)
$$

对于周期热源，显然其频谱只能有一个周期，即
$$
f(k,\omega)=\alpha(k)\delta(\omega-\omega_{0})
$$

这里不将$\omega$看作常数，因为后面还会引入$-\omega_{0}$，必须保证$\alpha$关于实轴对称。于是
$$
\tau(k,\omega)=-i\frac{\alpha(k)}{\kappa k}\delta(\omega-\omega_{0})
$$

于是
$$
\begin{aligned}
T(z,t)&=\frac{1}{(2\pi)^{2}}\int\left( -i\frac{\alpha(k)}{\kappa k} \right)\delta(\omega-\omega_{0})e^{i(\omega t-kz)}d\omega dk \\\
&=\frac{1}{(2\pi)^{2}}\int\left( -i\frac{\alpha(k_{0})}{\kappa k_{0}} \right)e^{i(\omega_{0}t-k_{0}z)}dk\\\
&=-i\frac{\alpha(k_{0})}{2\pi\kappa k_{0}}e^{i(\omega_{0}t-k_{0}z)}
\end{aligned}
$$

这里忽略了$\delta$函数的影响。不过，由于$\delta(\omega-\omega_{0})$的傅里叶变换一定是虚数，而我们希望得到一个实的结果，因此还需要加上$-\omega_{0}$的部分，即

$$
\begin{aligned}
T(z,t)&=-i\frac{\alpha(k_{0})}{2\pi\kappa k_{0}}e^{i(\omega_{0} t-k_{0}z)}-i\frac{\alpha(k_{0}^{\*})}{2\pi\kappa k_{0}^{*}}e^{i(-\omega_{0}t+k_{0}^{\*}z)} \\\
&=\frac{\alpha(k_{0})}{\pi\kappa}\Re\left[ \frac{e^{i(\omega_{0}t-k_{0}z)}}{ik_{0}} \right]
\end{aligned}
$$

这里假定了$\alpha$关于实轴对称。类似的
$$
F(z,t)=\frac{\alpha(k_{0})}{\pi}\Re\left[e^{i(\omega_{0} t-k_{0}z)}\right]
$$

即
$$
F(z,t)=\frac{\alpha(k_{0})}{\pi}\cos\left( \omega_{0}t-\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)\exp\left( -\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)
$$

此外
$$
T(z,t)=\frac{\alpha(k_{0})}{\pi\sqrt{\rho C\kappa\omega_{0}}}\cos\left( \omega_{0}t-\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z-\frac{\pi}{4} \right)\exp\left( -\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)
$$

从中可以看出
$$
F(0,t)=\frac{\alpha(k_{0})}{\pi}\cos\omega_{0}t=F_{0}\cos\omega_{0}t
$$

$F_{0}$为表面的热量的振幅，从而
$$
F(z,t)=F_{0}\cos\left( \omega_{0}t-\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)\exp\left( -\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)\tag{6}
$$

以及
$$
T(z,t)=\frac{F_{0}}{\sqrt{\rho C\kappa\omega_{0}}}\cos\left( \omega_{0}t-\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z-\frac{\pi}{4} \right)\exp\left( -\sqrt{\frac{\rho C\omega_{0}}{2\kappa}}z \right)\tag{7}
$$

## 特殊情况：空气中的金属球体

考虑另一种简单的情况，即位于空气中的金属球体，球体内部的$\kappa$可认为无限大，边界处的$\kappa$为有限值，球体的半径为$R$，空气的温度始终为$T_{a}$，球体的初始温度为$T_{0}\gg T_{a}$，于是球体内部
$$
\Delta T=0
$$

即温度为常数。
