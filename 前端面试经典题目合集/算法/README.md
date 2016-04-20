# 算法

### 求二叉树的节点的个数
```
algorithm countleaf(Tree *t,int count){
	if(t != null){
		if(t->lchild != null && t->rchild != null)
			count++;
		countleaf(t->lchild,count);
		countleaf(t->rchild,count);
	}
}
```

### 求二叉树深度算法
```
algorithm depth(Tree *t){
	if(t == null)
		return (0);
	else {
		hl = depth(t->lchild);
		hr = depth (t->rchild);
		if(hl>hr)
			return hl+1;
		else 
			return hr+1;
	}

}
```

### 将二叉树的左右孩子交换的算法
```
algorithm swap(Tree *b){
	Tree *t;
	if(b = null)
		return ;
	else {
		t = b->lchild;
		b->lchild = b->rchild;
		b->rchild = t;
		swap(b->lchild);
		swap(b->rchild);
	}
}
```

### 用两个栈模拟一个队列
```
algorithm 用两个栈模拟一个队列{
	stack s1,s2;	//容量为n
	void 元素入列{
		int x;
		if(s1->top == n)
			printf("队列上溢");
		else
			push(s1,x);
	}

	void 元素出列{
		int x;

		s2-top = 0;
		while(!Empty(s1))
			push(s2,pop(s1));
		pop(s2,x);
		while(!Empty(s2))
			push(s1,pop(s2));
	}

	void 判断队列为空{
		if(isEmpty(s1))
			return (1);
		else 
			return (0);
	}
}
```

### 