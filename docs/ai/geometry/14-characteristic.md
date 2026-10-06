# 第 14 章 特征类与指标

丛局部平凡，全局却可能扭转。特征类把这种扭转送到基空间的上同调中；连接与曲率提供它们的可计算代表，但最终的上同调类不依赖连接。

## 14.1 从过渡函数到第一 Chern 类 ★

在流形的好覆盖上，复线丛在交集上以非零复函数 $g_{ij}$ 换标架。交集可缩，因而可以取对数，三重交集上的
$\log g_{ij}+\log g_{jk}-\log g_{ik}$ 为 $2\pi i$ 的整数倍，产生整数二余循环，即 $c_1(L)\in H^2(M;\mathbb Z)$。

换局部标架改变一个余边界，故类不变。张量积把过渡函数相乘，给出
$c_1(L\otimes L')=c_1(L)+c_1(L')$。
这个构造也保留曲率形式看不到的挠信息。

## 14.2 Chern–Weil 形式 ★

对 Hermitian 向量丛的酉连接，曲率矩阵为 $\Omega=d\omega+\omega\wedge\omega$。规定

$$
c(E,\nabla)=\det\left(I+\frac{i}{2\pi}\Omega\right),\qquad
\operatorname{ch}(E,\nabla)=\operatorname{tr}
\exp\left(\frac{i}{2\pi}\Omega\right).
$$

其中次数 $2j$ 部分分别代表整数 Chern 类映入实上同调后所得的 $c_j$ 与 Chern 特征分量。Bianchi 恒等式及共轭不变性证明这些形式闭。

为什么与连接无关？用 $\nabla_t=(1-t)\nabla_0+t\nabla_1$ 连接两个给定连接。对次数 $r$ 的不变多项式 $P$，极化后
$\frac d{dt}P(\Omega_t)=r\,dP(\dot\omega_t,\Omega_t,\ldots,\Omega_t)$；
协变导数中的交换子项由不变性消失，$D_t\Omega_t=0$ 消去其余项。积分 $t$ 后差是恰当形式。这给出了不依赖性的证明，也产生 Chern–Simons 传递形式。

## 14.3 射影直线上的符号检验

在 $\mathbb{CP}^1$，令 $z=z_1/z_0$。重言线丛（tautological line bundle）$\mathcal O(-1)$ 的两局部标架为 $e_0=(1,z)$、$e_1=(z^{-1},1)=z^{-1}e_0$，所以过渡函数 $g_{01}=z^{-1}$。

沿赤道，连接形式满足 $A_1=A_0+g_{01}^{-1}dg_{01}$。两个半球的边界定向相反，Stokes 给出

$$
\int_{\mathbb{CP}^1}c_1
=\frac{i}{2\pi}\oint(A_0-A_1)
=\operatorname{wind}(g_{01})=-1.
$$

因此 $\mathcal O(1)$ 的第一 Chern 数为 $+1$。此计算与第 11 章线丛次数、以及第 8 章换标架公式一致。

## 14.4 Euler、Stiefel–Whitney 与 Pontryagin 类

设 $\pi:E\to M$ 是定向的实秩 $r$ 向量丛，$r>0$，零截面记为 $s_0$。Thom 类是相对上同调类 $u_E\in H^r(E,E\setminus s_0(M);\mathbb Z)$，其在每根纤维上的限制是由定向选定的 $H^r(\mathbb R^r,\mathbb R^r\setminus\{0\};\mathbb Z)$ 的生成元。将 $u_E$ 映入 $H^r(E;\mathbb Z)$，再沿零截面拉回，得到 Euler 类 $e(E)\in H^r(M;\mathbb Z)$。横截截面的零点或零子流形表示其对偶类；处处非零截面使 Euler 类为零，但反向推论还需注意其他障碍。

实丛的 Stiefel–Whitney 类 $w_j(E)\in H^j(M;\mathbb F_2)$ 记录模 $2$ 障碍；$w_1(E)=0$ 当且仅当 $E$ 可定向。Pontryagin 类规定
$p_j(E)=(-1)^j c_{2j}(E\otimes_{\mathbb R}\mathbb C)$。
三种类的次数、系数和所需结构不同。

## 14.5 Gauss–Bonnet：曲率与拓扑 ★

设 $M$ 是闭定向二维 Riemann 流形。在与定向相容的单位正交标架下，前述曲率约定给出
$\Omega^1{}_2=K\,d\operatorname{vol}_g$。于是 Euler 形式为 $K\,d\operatorname{vol}_g/(2\pi)$，积分定理给出

$$
\int_M K\,d\operatorname{vol}_g=2\pi\chi(M).
$$

局部几何证明可把曲面剖分成测地三角形：每个三角形的曲率积分等于内角和减 $\pi$，所有顶点角合为 $2\pi v$，且 $3f=2e$，总和成为 $2\pi(v-e+f)$。三角形公式来自沿边平行移动的转角与连接曲率的 Stokes 公式。一般剖分带有边测地曲率项，相邻边项抵消，仍得到相同结果。

单位球 $K=1$、面积 $4\pi$、$\chi=2$；属 $\gamma\ge2$ 的闭双曲曲面面积为 $4\pi(\gamma-1)$。这同时检验球面与双曲面积公式的符号。

## 14.6 K 理论与椭圆算子

向量丛直和形成交换幺半群，群完成得到 $K^0(M)$。形式差 $[E]-[F]$ 不等于把每点纤维做普通集合差。Chern 特征把 K 理论映到偶次有理上同调，并把张量积变成乘法。

椭圆算子的主符号在非零余切向量上可逆。紧无边界流形上的椭圆算子有有限维核与余核，定义
$\operatorname{ind}D=\dim\ker D-\dim\operatorname{coker}D$。

## 14.7 Atiyah–Singer 定理与两个模型 ※

指标定理把上述解析指标等同于主符号的拓扑指标。一般形式需要余切丛上的 K 理论与推前；这里用两个具体公式理解它。

de Rham 算子 $d+d^\dagger$ 从偶形式到奇形式，Hodge 定理使其指标为 $\chi(M)$，拓扑侧是 Euler 类积分。Dirac 的 Clifford 作用取 $c(v)^2=-g(v,v)I$，即使用二次型 $q=-g$ 的 Clifford 代数，仍遵循代数学的 $v^2=q(v)$ 约定。紧偶维 spin 流形上的扭曲 Dirac 算子满足

$$
\operatorname{ind}D_E^+=\int_M\widehat A(TM)\operatorname{ch}(E),
\qquad \widehat A=1-\frac{p_1}{24}+\cdots.
$$

只取总次数等于 $\dim M$ 的部分。spin 假设不是装饰；任意定向流形不一定具有这里的 Dirac 算子。完整指标定理的证明超出本讲义，前面的具体计算提供可以核查的使用入口。

## 练习

1. 用过渡函数证明 $c_1(L^*)=-c_1(L)$。
2. 检查单位球面的 Euler 形式积分。
3. 解释平坦连接为什么只能推出实特征形式为零，而不能排除整数挠类。
4. 用 Hodge 分解证明 de Rham 算子的指标为 Euler 特征。
