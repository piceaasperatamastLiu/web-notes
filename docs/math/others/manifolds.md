## 1.流形

我们首先给出最一般的拓扑流形的概念：
> 集合$M$被称为是一个**拓扑流形**，如果它是第二可数的Hausdorff空间，并且对于任意$p\in M$，总存在$p$的开邻域$U\subseteq M$使得映射$\phi:U\rightarrow\phi(U)$是同胚的，其中$\phi(U)$为$\mathbb{R}^{n}$中的开集，$n$称为流形的该点的局部维数，$(U,\phi)$称为一个**坐标卡**，坐标卡的集合称为**图册**

拓扑流形不是我们研究的重点，因为无法在上面定义微积分。为此我们引入微分流形：

> 拓扑流形$M$被称为是一个**微分流形**，如果对于图册中的任意两个坐标卡$(U,\phi)$和$(V,\psi)$，当$U\cap V\neq\varnothing$时映射
> $$
> \psi\circ\phi^{-1}:\phi(U\cap V)\rightarrow \psi(U\cap V)
> $$
> 是微分同胚，即该映射是光滑的，并且它的逆映射也是光滑的

此处我们默认光滑指的是$C^{\infty}$，当然通常$C^{1}$也能给出同样的结果。关于判断一个集合是否是流形，比较经典的定理有*嵌入定理*和*正则值定理*，这些我们都不做介绍

流形的常用表示方法包括表示为一个光滑函数的零点的集合或者表示为一组参数方程

在某些时候（主要是研究积分时），我们希望流形是有边界的，但是按照上面的定义，显然上半平面$\mathbb{H}^{n}$不是一个流形，因此我们引入**带边流形**的概念，它和前面的流形的定义一致，只是同胚的对象从$\mathbb{R}^{n}$改为了$\mathbb{H}^{n}$中的限制拓扑下的某个开集。如果对于$p\in M$，仍然能够找到包含$p$的某个坐标卡$(U,\phi)$，使得$U\cong\mathbb{R}^{n}$，则称$p$为带边流形的**内点**，否则称为**边界点**。所有边界点构成带边流形的边界，记为$\partial M$.可以证明
$$
\dim\partial M=\dim M-1
$$

---

考虑微分流形$M$的两个坐标卡$(U_{\alpha},\phi_{\alpha})$和$(U_{\beta},\phi_{\beta})$，如果$U_{\alpha}\cap U_{\beta}\neq\varnothing$，则在$U_{\alpha}\cap U_{\beta}$上可以定义转移函数$\phi:=\phi_{\beta}\circ\phi_{\alpha}^{-1}$，如果对于任意$p\in U_{\alpha}\cap U_{\beta}$，都有$\det\phi'>0$，则称两个坐标卡是定向相容的。如果一个流形的所有有交集的坐标卡之间都是定向相容的，则称流形是**可定向**的。定向相容关系构成的等价类称为流形的一个定向。对于一般流形的定向需要用到复杂的拓扑知识，这里不做介绍。我们可以证明：

> 连通可定向流形有且仅有两个定向

> 可定向的带边流形的边界也是可定向的

## 2.切空间

传统上通过嵌入映射定义切空间。假定$p\in M$，$(U,\phi)$是包含$p$的一个坐标卡，则$\psi:=\phi^{-1}$是光滑的。考虑$x\in U,t=\phi(x),t_{0}=\phi(p)$，则根据多元函数的导数的定义有
$$
x=\psi(t)=p+\psi'(t_{0})(t-t_{0})+\omicron(\\|t-t_{0}\\|)
$$

显然由参数方程
$$
x=p+\psi'(t_{0})(t-t_{0})
$$

确定的曲面也是一个流形，称为$M$在$p$处的切空间。这一定义便于我们计算给定流形的切空间。例如，对于三维曲线，有
$$
\psi:\mathbb{R}\rightarrow\mathbb{R}^{3},t\longmapsto \begin{pmatrix}
x(t) \\\\ y(t) \\\\ z(t)
\end{pmatrix}
$$

考虑$t_{0}$处的结果，有
$$
\psi'(t_{0})=\begin{pmatrix}
x'(t_{0})\\\\ y'(t_{0})\\\\ z'(t_{0})
\end{pmatrix}^{T}
$$

于是曲线方程为

$$
\begin{pmatrix}
x\\\\
y\\\\
z
\end{pmatrix}=\begin{pmatrix}
x(t_{0})\\\\ y(t_{0})\\\\ z(t_{0})
\end{pmatrix}+\begin{pmatrix}
x'(t_{0})\\\\ y'(t_{0})\\\\ z'(t_{0})
\end{pmatrix}(t-t_{0})
$$

显然，导数即代表曲线的切向量。又如，对于三维曲面
$$
\psi:\mathbb{R}^{2}\rightarrow\mathbb{R}^{3},\begin{pmatrix}
u\\\\ v
\end{pmatrix}\longmapsto\begin{pmatrix}
x(u,v)\\\\ y(u,v) \\\\ z(u,v)
\end{pmatrix}
$$

有
$$
\psi'(u_{0},v_{0})=\begin{pmatrix}
x_{u}(u_{0},v_{0})&x_{v}(u_{0},v_{0})\\\\
y_{u}(u_{0},v_{0})&y_{v}(u_{0},v_{0})\\\\
z_{u}(u_{0},v_{0})&z_{v}(u_{0},v_{0})
\end{pmatrix}
$$

从而
$$
\begin{pmatrix}
x\\\\
y\\\\
z
\end{pmatrix}=\begin{pmatrix}
x(u_{0},v_{0})\\\\ y(u_{0},v_{0})\\\\ z(u_{0},v_{0})
\end{pmatrix}+\begin{pmatrix}
x_{u}(u_{0},v_{0})&x_{v}(u_{0},v_{0})\\\\
y_{u}(u_{0},v_{0})&y_{v}(u_{0},v_{0})\\\\
z_{u}(u_{0},v_{0})&z_{v}(u_{0},v_{0})
\end{pmatrix}\begin{pmatrix}
u-u_{0}\\\\ v-v_{0}
\end{pmatrix}
$$

作为特例，如果取$u=x,v=y$，则
$$
z=z(x_{0},y_{0})+z_{x}(x_{0},y_{0})(x-x_{0})+z_{y}(x_{0},y_{0})(y-y_{0})
$$

相应的法向量为$(z_{x},z_{y},-1)$.对应的，如果使用隐函数描述，则法向量为$(F_{x},F_{y},F_{z})$

---

以上定义需要利用嵌入映射，而切空间的现代定义是完全内蕴的：

> 点$p\in M$处的**切向量**定义为线性映射
> $$
> v:C^{\infty}(M,p)\rightarrow \mathbb{R}
> $$
> 它满足*莱布尼兹律*
> $$
> v(fg)=v(f)g(p)+f(p)v(g)
> $$
> 其中$f$是定义在$p$点的某个邻域内的光滑映射。$p$点的所有切向量构成$p$点处的**切空间**，记为$T_{p}M$

考虑坐标卡$(U,\phi)$，可以定义算子
$$
\frac{\partial }{\partial x^{i}}(f):=\frac{\partial (f\circ\phi^{-1})}{\partial r^{i}}(\phi(p))
$$

可以证明$\frac{\partial }{\partial x^{i}}$张成了整个切空间，即对于任意$v\in T_{p}M$都有
$$
v=\sum_{i}v(x^{i})\frac{\partial }{\partial x^{i}}
$$

这正是方向导数算子，因此可以将切平面上的向量和切空间中的算子建立一一对应关系，从而建立了这两种定义之间的联系

## 3.微分形式

微分形式的定义从余切空间开始：

> 对于$p\in M$，切空间$T_{p}M$的对偶空间称为**余切空间**，记为$T_{p}^{\*}M$，其中的元素称为**余切向量**

余切空间中的元素正是我们所谓的1-形式的值。根据对偶空间的定义，我们考虑切空间的基$\frac{\partial }{\partial x^{j}}$，我们显然可以找到余切空间中的基$dx_{i}$，使得
$$
dx^{i}\left( \frac{\partial }{\partial x^{j}} \right)=\delta_{j}^{i}
$$

在此基础之上，我们定义微分形式：

> 定义**外积**
> $$
> T_{p}^{\*}M\times\cdots\times T_{p}^{\*}M\rightarrow \Lambda^{k}(T_{p}^{\*}M),(\omega^{(1)},\cdots,\omega^{(k)})\longmapsto \omega^{(1)}\wedge\cdots\wedge\omega^{(k)}
> $$
>
> 它满足
> $$
> \omega\wedge\cdots\wedge\eta\wedge\cdots\wedge\eta\wedge\cdots\xi=0
> $$
>
> 则映射$\omega_{p}:p\longmapsto\Lambda^{k}(T_{p}^{\*}M)$称为流形$M$上的一个**$k$次微分形式**

根据这个定义不难证明
$$
\omega\wedge\eta=-\eta\wedge\omega
$$

根据对偶的定义，显然微分形式同构于$T_{p}M\times\cdots\times T_{p}M$到$\mathbb{R}$的反对称的线性映射，而后者表示切向量组成的体积元

对于$k$次微分形式
$$
\omega=\sum_{I}f_{I}dx^{I}
$$

我们可以定义其**外微分**为
$$
d\omega:=\sum_{i=1}^{n}\frac{\partial f_{I}}{\partial x^{i}}dx^{i}\wedge dx^{I}
$$

可以证明外微分满足
$$
\omega\in\Omega^{k},\eta\in\Omega^{l}\Rightarrow d(\omega\wedge\eta)=d\omega\wedge\eta+(-1)^{k}\omega\wedge d\eta
$$

以及
$$
\omega\in\Omega^{k}\Rightarrow d(d\omega)=0
$$

## 4.微分形式上的积分

为了定义微分形式上的积分，首先我们定义$\mathbb{R}^{n}$上的微分形式的积分。考虑可测集$D\subseteq\mathbb{R}^{n}$，它上面的微分形式为
$$
\omega=f(x^{1},\dots,x^{n})dx^{1}\wedge\cdots\wedge dx^{n}
$$

则$\omega$在$D$上的积分定义为
$$
\int_{D}\omega:=\int_{D}f(x^{1},\dots,x^{n})
$$

后者表示标准的$n$重积分。随后，我们引入如下概念：

> 考虑光滑映射$\phi:M\rightarrow N,f:N\rightarrow\mathbb{R}$，则$f$沿$\phi$的**拉回**定义为映射
> $$
> \phi^*f:M\rightarrow\mathbb{R},p\longmapsto f(\phi(p))
> $$

也就是说我们可以认为$\phi^*f=f\circ\phi$.可以验证，拉回映射具备如下性质：
$$
\begin{aligned}
(\psi\circ\phi)^{\*}&=\phi^{\*}\circ\psi^{\*} \\\\
\phi^{\*}(\omega+\eta)&=\phi^\*\omega+\phi^\*\eta \\\\
\phi^{\*}(\omega\wedge\eta)&=(\phi^\*\omega)\wedge(\phi^\*\eta) \\\\
\phi^\*(d\omega)&=d(\phi^\*\omega) \\\\
(\phi^{\*}\omega)_{p}(v\_{1},\dots,v\_{k})&=\omega\_{\phi(p)}(d\phi\_{p}(v\_{1}),\dots,d\phi\_{p}(v\_{k}))
\end{aligned}
$$

其中$d\phi_{p}:T_{p}M\rightarrow T_{\phi(p)}N$也被称为**推前**映射。现在，考虑坐标卡$(U,\phi)$，如果$\omega$的支撑集是$U$的子集，则$\omega$在$M$上的积分可以定义为
$$
\int_{M}\omega:=\int_{\phi(U)}(\phi^{-1})^\*\omega
$$

现在，为了将其推广到整个流形上，我们引入单位分解

> 流形$M$上的一簇函数$\rho_{\alpha}:M\rightarrow[0,1]$被称为一个**单位分解**，如果每个$\rho_{\alpha}$的支撑集都包含在对应的$U_{\alpha}$中，并且对于任意$p\in M$，都有$\displaystyle\sum_{\alpha}\rho_{\alpha}(p)=1$

可以证明，$k$维紧带边流形一定存在单位分解。现在，考虑一个可定向的流形$M$，它具有有限的坐标卡$(U_{\alpha},\phi_{\alpha})$，考虑其单位分解$\rho_{\alpha}$，则
$$
\omega=\sum_{\alpha}\rho_{\alpha}\omega
$$

右边的每一项的支撑集都在$U_{\alpha}$中，于是可以定义整个流形上的积分
$$
\int_{M}\omega:=\sum_{\alpha}\int_{M}\rho_{\alpha}\omega
$$

可以证明，流形上的积分的结果和坐标卡及单位分解的选取无关。利用单位分解和微积分基本定理，我们可以证明著名的斯托克斯定理：

> 设$M$是一个$n$维可定向带边紧流形，$\omega$是$M$上的一个$n-1$形式，并且具有紧支撑集，则
> $$
> \int_{M}d\omega=\int_{\partial M}\omega
> $$

---

现在，我们来考虑第一型曲面积分。为此，我们引入黎曼度量的概念：

> 流形$M$上的**黎曼度量**是光滑映射$g:p\longmapsto g_{p}$，它满足$g_{p}:T_{p}M\times T_{p}M\rightarrow\mathbb{R}$是一个对称的正定的双线性映射。配备的黎曼度量的流形称为**黎曼流形**

在定义了黎曼度量后，对于一个可定向流形$M$（为了方便只考虑可定向的情况）可以自然地构造一个坐标变换下不变的体积元
$$
dV_{g}:=\sqrt{\det(g_{ij})}dx^{1}\wedge\cdots\wedge dx^{m}
$$

从而可以定义第一型曲面积分
$$
\int_{U}fdV_{g}:=\int_{\phi(U)}(f\circ\phi^{-1})\sqrt{\det(g_{ij})}dx^{1}\wedge\cdots\wedge dx^{m}
$$

最后使用单位分解拼起来即可

## 5.例子

我们先从第一型曲面积分开始。考虑通过拉回映射将$g$拉回到$\mathbb{R}^{n}$上，最终可以得出
$$
g_{ij}=\left( \phi'(p)^{T}\phi'(p) \right)_{ij}
$$

对于曲线，有$\phi(t)=(x(t),y(t),z(t))^{T}$，于是
$$
\phi'(t)=\begin{pmatrix}
x'(t)\\\\ y'(t)\\\\ z'(t)
\end{pmatrix}
$$

从而
$$
g_{ij}=\left( x'(t)^{2}+y'(t)^{2}+z'(t)^{2} \right)\delta_{ij}
$$

于是第一型曲线积分为
$$
\int_{L}fds=\int_{I}(f\circ\phi)(t)\sqrt{x'(t)^{2}+y'(t)^{2}+z'(t)^{2}}
$$

现在考虑第二型曲线积分，由于微分形式
$$
\omega=Pdx+Qdy+Rdz=\left( (P\circ\phi)x'+(Q\circ\phi)y'+(R\circ\phi)z' \right)dt
$$

于是
$$
\int_{L}\omega=\int_{I}\left( (P\circ\phi)x'+(Q\circ\phi)y'+(R\circ\phi)z' \right)
$$

于是我们有
$$
\int_{L}\omega=\int_{L}\frac{Px'+Qy'+Rz'}{\sqrt{x'^2+y'^2+z'^2}}ds
$$

左边表示对微分形式的微分，而右边是第一型曲线积分，这就建立了两种曲线积分之间的联系

---

类似的，对于曲面积分，有
$$
\phi(u,v)=\begin{pmatrix}
x(u,v)\\\\ y(u,v) \\\\ z(u,v)
\end{pmatrix}
$$

于是
$$
\phi'=\begin{pmatrix}
x_{u}&x_{v} \\\\
y_{u}&y_{v} \\\\
z_{u}&z_{v} 
\end{pmatrix}
$$

于是
$$
(g_{ij})=\begin{pmatrix}
x_{u}^{2}+y_{u}^{2}+z_{u}^{2}&x_{u}x_{v}+y_{u}y_{v}+z_{u}z_{v}\\\\
x_{u}x_{v}+y_{u}y_{v}+z_{u}z_{v}&x_{v}^{2}+y_{v}^{2}+z_{v}^{2}
\end{pmatrix}
$$

于是
$$
\det(g_{ij})=\left( x_{u}y_{v}-x_{v}y_{u} \right)^{2}+\left( x_{u}z_{v}-x_{v}z_{u} \right)^{2}+\left( y_{u}z_{v}-y_{v}z_{u} \right)^{2}
$$

于是
$$
\int_{S}fdS=\int_{D}(f\circ\phi)\sqrt{\left( x_{u}y_{v}-x_{v}y_{u} \right)^{2}+\left( x_{u}z_{v}-x_{v}z_{u} \right)^{2}+\left( y_{u}z_{v}-y_{v}z_{u} \right)^{2}}
$$

类似的，考虑微分形式
$$
\omega=Pdx\wedge dy+Qdy\wedge dz+Rdz\wedge dx
$$

由于
$$
\begin{aligned}
dx\wedge dy&=(x_{u}y_{v}-x_{v}y_{u})du\wedge dv \\\\
dy\wedge dz&=(y_{u}z_{v}-y_{v}z_{u})du\wedge dv \\\\
dz\wedge dx&=(z_{u}x_{v}-z_{v}x_{u})du\wedge dv
\end{aligned}
$$

从而有
$$
\int_{S}\omega=\int_{D}\left( (P\circ\phi)(x_{u}y_{v}-x_{v}y_{u})+(Q\circ\phi)(y_{u}z_{v}-y_{v}z_{u})+(R\circ\phi)(z_{u}x_{v}-z_{v}x_{u}) \right)
$$

注意这里两个括号间的是乘号而不是复合。因此有
$$
\int_{S}\omega=\int_{S}\frac{P(x_{u}y_{v}-x_{v}y_{u})+Q(y_{u}z_{v}-y_{v}z_{u})+R(z_{u}x_{v}-z_{v}x_{u})}{\sqrt{\left( x_{u}y_{v}-x_{v}y_{u} \right)^{2}+\left( x_{u}z_{v}-x_{v}z_{u} \right)^{2}+\left( y_{u}z_{v}-y_{v}z_{u} \right)^{2}}}dS
$$

显然后者的几何意义是切平面的法向量。在很多时候使用两个参数计算第一型曲面积分并不方便，并且也没有必要，例如如果映射$(x,y)\longmapsto(x,y,z)\in S$存在，则可以直接选取$x,y$作为参数，这样第一型曲面积分可以简化为
$$
\int_{S}fdS=\int_{D}f(x,y,\phi(x,y))\sqrt{z_{x}^{2}+z_{y}^{2}+1}
$$

## 6.de Rham 上同调群

我们现在回顾格林公式，它通常要求积分区域是单连通的，但是我们在斯托克斯定理中确并没有这个要求。为此，我们引入如下理论：

> 微分形式$\omega$被称为**闭形式**，如果$d\omega=0$，所有闭形式的集合记为$Z^{k}(M)$；$\omega$被称为**恰当形式**，如果存在$\eta$使得$\omega=d\eta$，所有恰当形式的集合记为$B^{k}(M)$

显然，恰当形式一定为闭形式，即$B^{k}(M)\subseteq Z^{k}(M)$，因此我们可以引入如下定义：

> **de Rham上同调群**定义为
> $$
> H^{k}_{dR}(M):=Z^{k}(M)/B^{k}(M)
> $$
>
> 其维数$\beta_{k}:=\dim H^{k}_{dR}(M)$称为**贝蒂数**

贝蒂数包含了我们所需要的流形的全部拓扑信息。一般来说，$b_{0}(M)$表示$M$的连通分支的数量，$b_{n}(M)$包含了$M$的定向信息，其余的贝蒂数则表征“洞”的数量。特别的，对于平面上的区域而言，$b_{1}$即代表孔洞的数量。因此，对于单连通区域，$b_{1}=0$，此时所有闭形式都是恰当形式，即
$$
\forall\omega\in\Omega^{1}(D)\exist f\in\Omega^{0}(D)(\omega=df)
$$

此时曲线积分的结果和路径无关。而对于$b_{1}=m\neq0$的情况，我们在任何一个洞附近都可以构造类似
$$
\eta=-\frac{y}{x^{2}+y^{2}}dx+\frac{x}{x^{2}+y^{2}}dy
$$

的形式，则任意闭形式可以写为
$$
\omega=df+\sum_{i=1}^{m}c_{i}\eta_{i}
$$

此时曲线积分的结果和路径的卷绕数有关
