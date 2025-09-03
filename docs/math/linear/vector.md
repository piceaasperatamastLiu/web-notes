## 1.一些基本的代数结构

为了使此后的讨论更为简单，我们尝试引入一些通用的代数结构，如：

> 我们定义**群**为满足下面性质的集合$G$:  
> (i)$\forall a,b,c\in G(a(bc)=(ab)c)$  
> (ii)$\exists e\in G\forall a\in G(ae=ea=a)$  
> (iii)$\forall a\in G\exists a^{-1}\in G(aa^{-1}=a^{-1}a=e)$  

特别的，若$\forall a,b\in G(ab=ba)$，则称$G$为**交换群**
例如，$\Z$是交换群。
群只定义了“乘法”，而我们希望用到更多运算，于是就有了**环**：

> 集合$R$是一个环，当且仅当：  
> (i)$<R,+\>$是一个交换群  
> (ii)定义在$R$上的乘法满足结合律和分配律  

例如，集合$\Z$便是一个环。

> 对于环$R$，我们定义其上面的左**模**为交换群$A$及映射$R\times A\rightarrow A$，满足：  
> (i)$ r(a+b)=ra+rb $  
> (ii)$ (r+s)a=ra+sa $  
> (iii)$ r(sa)=(rs)a $  

如果环$R$除开元素$0$外乘法为交换群则称其为**域**（通常写为$F$）
如$\mathbb{Q},\R,\mathbb{C}$都是域
如果$R$是一个域，则$R-$模为**向量空间**（其实定义更宽泛，不过这个更常用）
关于这些代数系统的更抽象讨论及相关细节参见附录。

## 2.向量空间

我们沿用上面的定义，并称向量空间中的元素为**向量**。对一组向量$\{v_1,v_2,\cdots,v_n\}$，我们定义其**张成空间**为

$$
\text{span}(v_1,v_2,\cdots,v_n):=\\{\sum_{i=1}^n\lambda_iv_i|\lambda_i\in F\\}
$$

我们称一组向量**线性无关**，当且仅当

$$
v\in\text{span}(v_1,v_2,\cdots,v_n)\Leftrightarrow\forall i(\lambda_i=0)
$$

于是我们可以定义基向量：
我们称一组向量为向量空间的**基**，当且仅当其线性无关且

$$
\text{span}(v_1,v_2,\cdots,v_n)=V
$$

可以证明，基向量是向量空间中最大的一组线性无关的向量，于是我们可以定义**维数（秩）**：

$$
\dim V=\text{rank} V:=n
$$

维数的描述向量空间的一个重要量，我们在以后将看到它的用处
维数的一个重要性质为

$$
U\le V\Rightarrow\dim U\le \dim V
$$

## 3.线性映射

考虑两个向量空间$V$和$W$以及它们间的映射

$$
T:V\rightarrow W
$$

如果对任意$v,w\in V$和$\lambda,\mu\in F$，都有

$$
T(\lambda v+\mu w)=\lambda T(v)+\mu T(w)
$$

则称映射$T$为**线性映射**，记为$T\in\text{Hom}(V,W)$或$T\in\mathcal{L}(V,W)$.显然线性映射是同态映射，所以如果$T$是双射，则$T$是同构映射，也就是说

$$
V\cong W
$$

可以证明，如果两个向量空间同构，那么它们的维数相等，于是$n$维空间必然同构于$\R^n$

一个重要的性质是集合$\text{Hom}(V,W)$也是一个向量空间，其中加法定义为

$$
(T+S)(v):=T(v)+S(v)
$$

数乘定义为

$$
(\lambda T)(v):=\lambda T(v)
$$

不难证明这些定义都是明确的，于是线性映射的集合也是向量空间，那么自然的，我们应该考虑该空间的维数。我们给出下面结论：
> $\text{Hom}(V,W)$构成向量空间，并且其维数等于$\dim V\times\dim W$

关于这一结论的证明，其构成向量空间是显然的，假定$v_i$和$w_j$分别是$V$和$W$的基，定义映射
$$
T_{ij}(v_k)=\delta_{ik}w_j
$$

这样的映射总共有$\dim V\times\dim W$个，而这样映射又是一组基，于是命题得证

和群论中一样，我们可以研究映射的**核空间**$\ker T$和**像空间**$\text{Im} T$，它们都是$\text{Hom}(V,W)$的子空间，并且我们可以证明：

$$
\dim V=\dim\ker T+\dim\text{Im}T
$$

## 4.矩阵

线性代数最基本的一个结论，就是线性映射$\text{Hom}(F^m,F^n)$和矩阵的集合$F^{m\times n}$同构，其证明如下：

考虑映射$\pi:\text{Hom}(E,F)\rightarrow \R^{n\times m},T\longmapsto A$，其中A构造为:
对$V$中的基$\\{e_i\\}$，有$T(e_i)=\sum a_{ij}e^\prime_j$，则$A:=(a_{ij})$，这样
$$
(T+s)(e_i)=T(e_i)+S(e_i)=\sum (t_{ij}+s_{ij})e_j \\ \Rightarrow\pi(T+S)=\pi(T)+\pi(S)
$$

以及显然
$$
\pi(\lambda T)=\lambda \pi(T)
$$

最后
$$
(T\circ S)(e_i)=T(\sum s_{ij}e^{\prime}_j)=\sum s\_{ij}t\_{jk}e^{\prime\prime}_k
$$

有
$$
\pi(T\circ S)=\pi(S)\pi(T)
$$

于是$\pi$是同态。此外由构造方式易得其为双射，于是证完。

---

考虑基变换

$$
v\longmapsto T(v)
$$

则对

$$
v_2=Av_1
$$

可得

$$
Pv_2'=APv_1'\Rightarrow v_2'=P^{-1}APv_1'
$$

鉴于线性变换在坐标变换下本质是不变的，所以$P^{-1}AP$和$A$实际上表示同一线性变换，我们称之为相似。不难验证相似是一个等价关系。

## 5.积空间与商空间

我们现在来考虑由两个向量空间$V_1$和$V_2$，它们的和空间定义为

$$
V_1+V_2:=\\{v_1+v_2|v_i\in V_1,v_2\in V_2\\}
$$

关于它有个重要的性质（**维数公式**）：

$$
\dim V+\dim W=\dim V\cap W+\dim(V+W)
$$

如果$V\cap W=\\{0\\}$，那么和空间的维数就应该等于维数之和，这种和我们称之为**直和**，即

$$
\dim V\oplus W=\dim V+\dim W
$$

鉴于线性变换在坐标变换下本质是不变的，所以$P^{-1}AP$和$A$实际上表示同一线性变换，我们称之为相似。不难验证相似是一个等价关系。

当我们考虑两个矩阵的直和（前面已经考虑了其合理性）时，必须将两个线性空间放在“更大”的线性空间下，即对于$\text{Hom}(V_1,W_1)$和$\text{Hom}(V_2,W_2)$，如果$\dim V\ge\dim V_1+\dim V_2$以及类似的$W$，则必须有

$$
v=(v_1,v_2,\cdots)^T
$$

这样

$$
T\oplus S=T+S
$$

这里$T$改变前面几个，$S$改变后面几个，如果连个这对应的矩阵分别为$A,B$，则必有

$$
A\oplus B=\left(\begin{matrix}
A&0 \\\\0&B
\end{matrix}\right)
$$

也就是将矩阵“拼起来”，显然这样的矩阵的秩是原先的矩阵的秩之和
这就自然需要引入分块矩阵的相关性质，但因为其是明显的，所有这里不做展开

我们可以在向量空间上定义笛卡尔积，称为积空间，它满足

$$
\dim V_1\times V_2=\dim V_1+\dim V_2
$$

类似的，可以定义商空间

$$
V/U:=\\{v+U|v\in V\\}
$$

对于$\dim U=1$，它表示所有与$U$平行的直线，不难证明

$$
\dim V/U=\dim V-\dim U
$$

实际上，只需要构造映射
$$
T:v\longmapsto v+U
$$

则它是线性映射，并且
$$
\ker T=\\{v\in V|v+U=U\\}=U
$$

于是根据
$$
\dim V=\dim\ker T+\dim\text{Im}T
$$

即可得出结论

## 6.对偶

对于向量空间$V$，我们定义其**对偶空间**为

$$
V^*:=\text{Hom}(V,F)
$$

于是

$$
\dim V^*=\dim V\times \dim F=\dim V
$$

于是对偶空间与原空间的维数相等，于是

$$
V\cong V^*
$$

正是这个原因，我们不区分$V$和$V^{**}$，也就是说我们认为

$$
V=V^{**}
$$

尽管它们实际上并不相等
假定$V$的一组基为$v_1,\cdots,v_n$，显然存在线性映射

$$
\varphi_i\in V^*,e_j\longmapsto \varphi_i(e_j)=\delta_{ij}
$$

像这样的基称为**对偶基**。考虑

$$
v=v_1e_1+\cdots+v_ne_n
$$

则

$$
\varphi_i(v)=v_i
$$

于是

$$
\varphi(v)=v_1\varphi_1+\cdots+v_n\varphi_n
$$

---

例如，对微分算子

$$
\frac{\partial }{\partial f}\in T_pM
$$

用标准基$\frac{\partial }{\partial x_i}$写出，有

$$
\frac{\partial }{\partial f}=\frac{\partial f}{\partial x_1}\frac{\partial }{\partial x_1}+\cdots+\frac{\partial f}{\partial x_n}\frac{\partial }{\partial x_n}
$$

对应的，在余切空间$df\in T^*_pM$，有

$$
df=\frac{\partial f}{\partial x_1}dx_1+\cdots+\frac{\partial f}{\partial x_n}dx_n
$$

---

对线性映射我们也可以定义对偶，考虑$T\in\text{Hom}(V,W)$，其对偶定义为

$$
T^*\in\text{Hom}(W^\*,V^\*),\varphi\longmapsto\varphi\circ T
$$

考虑

$$
T(v_i)=\sum a_{ij}v_j,T^*(\varphi_i)=\sum b_{ij}\varphi_j
$$

于是

$$
\begin{aligned}
T^*(\varphi_i)(v_k)&=\varphi_i(T(v_k))\\\\
&=\varphi_i(\sum_j a_{jk}v_j)\\\\
&=\sum_j(a_{jk} \varphi_i(v_j))\\\\
&=\sum_ja_{ik}\delta_{ij}=a_{jk}
\end{aligned}
$$

又因为

$$
\begin{aligned}
T^*(\varphi_i)(v_k)&=\sum b_{ij}\varphi_j(v_k)
\\\\&=\sum b_{ij}\delta_{jk}=b_{kj}
\end{aligned}
$$

于是

$$
b_{kj}=a_{ik}
$$

也就是说线性映射的对偶对应其转置

## 7.内积

按照一般的定义，**内积**定义为一个函数

$$
\langle\cdot,\cdot\rangle:F\times F\rightarrow F,(x,y)\longmapsto\langle x,y\rangle
$$

它关于$x$是线性的，而关于$y$满足

$$
\langle x,\lambda y_1+\mu y_2\rangle=\overline{\lambda}\langle x,y_1\rangle+\overline{\mu}\langle x,y\rangle
$$

并且它还必须满足：

$$
\begin{aligned}
&(1)\ \langle v,w\rangle=\overline{\langle v,w\rangle}\\\\
&(2)\ \langle v,w\rangle\ge0\\\\
&(3)\ \langle v,v\rangle=0\Leftrightarrow v=0
\end{aligned}
$$

此外，我们还常使用**范数**的概念：

$$
\|v\|:=\sqrt{\langle v,v\rangle}
$$

---

对于向量$v=(v_1,v_2,\cdots,v_n)^T$，$w=(w_1,w_2,\cdots,w_n)^T$不难证明其内积一定取为(不考虑常数)

$$
\langle v,w\rangle=\sum v_i\overline{w}_i
$$

或

$$
\langle v,w\rangle=\sum\overline{v}_iw_i
$$

中的一种，前者常用于数学中，后者常用于物理中

---

关于内积与范数的几个重要性质：

> **勾股定理**：如果两个向量$v$，$w$是**正交**的（即$\langle v,w\rangle=0$），则
>
>$$
> \|v+w\|^2=\|v\|^2+\|w\|^2
>$$
> ---
>**柯西-施瓦茨不等式**:对于任意两个向量$v$，$w$，都有
>
>$$
> \langle v,w\rangle\le\|v\|\|w\|
>$$
>
>当且仅当两个向量线性相关时取等号
>
> ---
> **闵可夫斯基不等式**：对于任意两个向量$v$，$w$，都有
>
>$$
> \|v+w\|\le\|v\|+\|w\|
>$$

上面三个性质都有明显的几何意义

考虑$V$的子空间$U$，定义其**正交投影**为

$$
U^\perp:=\\{v\in V|\forall\ u\in U(\langle v,u\rangle=0)\ \\}
$$

可以证明

$$
\begin{aligned}
&(1)\ U\oplus U^\perp=V\\\\
&(2)\ (U^\perp)^\perp=U\\\\
&(3)\ U^\perp\cong V/U
\end{aligned}
$$

于是对于有限维向量空间，重复上面过程有

$$
V=U_1\oplus U_2\oplus\cdots\oplus U_n
$$

其中$\text{dim}U_i=1$且任意两个空间中的任意两个向量都正交。不难看出这便是**正交分解**。
回到一般的情况，考虑$v\in V$，定义算子

$$
P_U:V\rightarrow U,v\longmapsto P_U(v)
$$

这样的算子称为**投影算子**，显然有

$$
\begin{aligned}
(1)&\ P_U\circ P_U=P_U\\\\
(2)&\ \|P_U(v)\|\le\|v\|
\end{aligned}
$$

第一个性质表明，除非$P_U\in\mathscr{L}(U)$，否则$P_U$不可逆

>**极小化问题**：对$v\in V$和$u\in U\le V$，都有
>
>$$
> \|v-P_U(v)\|\le\|v-u\|
>$$
>
>当且仅当$u=P_U(v)$时取等号

证明过程考虑
$$
\|v-P_U(v)\|^2\le\|v-P_U(v)\|^2+\|u-P_U(v)\|^2\le\|v-u\|^2
$$

即可

如果$\{e_i\}$是$V$的一组基，且

$$
\langle e_i,e_j\rangle=\delta_{ij}
$$

这样的基称为**标准正交基**，这样的基具有非常好的性质，如：

$$
v=\sum v_ie_i,u=\sum u_ie_i\Rightarrow\langle v,u\rangle=\sum \overline{v}_iu_ie_i
$$

与之相比，一般的基不满足这个性质

> 对于一般的基
>
> $$
> v=(v_1,\cdots,v_n)^T,u=(u_1,\cdots,u_n)^T
> $$
>
> 有
>
> $$
> \langle v,u\rangle=\sum g_{ij}\overline{v}_iu_j
> $$
>
> 这里的$g_{ij}$称为度规，在张量代数中它将经常用到。不难得出在这里
>
> $$
> g_{ij}=\langle e_i,e_j\rangle
> $$

对于一个线性无关组$v_1,\cdots,v_n$，可以构造一组标准正交基

$$
e_1=\frac{v_1}{\|v_1\|},e_i=\frac{v_i-\displaystyle{\sum_{j=1}^{i-1}}\langle v_i,e_j\rangle e_j }{\|v_i-\displaystyle{\sum_{j=1}^{i-1}}\langle v_i,e_j\rangle e_j\|}
$$

这个过程称为**施密特正交化**

这个过程可能看起来有些摸不着头脑，但实际上就是根据投影来构造一个垂直的向量（想想几何意义）

>$\text{Riesz}$**表示定理**：对有限维向量空间$V$和线性泛函$\varphi:V\rightarrow\mathbb{C}$，一定存在$u\in V$，使得对任意$v\in V$，都有
>
>$$
> \varphi(v)=\langle u,v\rangle
>$$

这个定理的证明过程是非常显然的
