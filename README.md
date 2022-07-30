# Web Application to Visualise Intersections

This project hasn't finished yet.
The goal is to create a web application that users could set their own equations for two or more lines, 
find their intersections, and return the touch points.

## Theory behind intersections
If we have an intersection, the intersection point will need to satisfy the two line equations.

```
Ix = Ax + (Bx - Ax)*t = Cx + (Dx - Cx)*u
Iy = Ay + (By - Ay)*t = Cy + (Dy - Cy)*u
```
where t, u the interpolation percentages for lines AB and CD respectively.

```
Ax + (Bx - Ax)t = Cx + (Dx - Cx)u => (Ax - Cx)+ (Bx - Ax)t = (Dx - Cx)u 
```

(Dx - Cx) might be equal to 0, so we won't divide yet.

```    
(By - Ay)t = Cy + (Dy - Cy)u => (Ay - Cy)+ (By - Ay)t = (Dy - Cy)u 
```

Multiply both sides by (Dx - Cx)

```
(Dx - Cx)*(Ay - Cy) + (Dx - Cx)*(By - Ay)t = (Dy - Cy)*(Dx - Cx)*u 
=> 
(Dx - Cx)*(Ay - Cy) + (Dx - Cx)*(By - Ay)t = (Dy - Cy)*(Ax - Cx) + (Dy - Cy)*(Bx - Ax)t
=>
(Dx - Cx)*(Ay - Cy) - (Dy - Cy)*(Ax - Cx) = (Dy - Cy)*(Bx - Ax)t - (Dx - Cx)*(By - Ay)t
=>
t = [(Dx - Cx)*(Ay - Cy) - (Dy - Cy)*(Ax - Cx)] / [(Dy - Cy)*(Bx - Ax)t - (Dx - Cx)*(By - Ay)]
```

### In code we'll have

```javascript
top = (Dx - Cx)*(Ay - Cy) - (Dy - Cy)*(Ax - Cx);
bottom = (Dy - Cy)*(Bx - Ax)t - (Dx - Cx)*(By - Ay);
t = top / bottom;
```

Before implementing we should check if ```bottom === 0``` !!!
 