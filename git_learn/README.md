# Learn Git
##Git基础
###取得项目的 Git 仓库
####在工作目录中初始化新仓库
要对现有的某个项目开始用 Git 管理，只需到此项目所在的目录，执行：
`$ git init`
####从现有仓库克隆
`$ git clone git://github.com/schacon/grit.git`
如果希望在克隆的时候，自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：
`$ git clone git://github.com/schacon/grit.git mygrit`

###记录每次更新到仓库
使用 Git 时的文件状态变化周期
![git文件状态变化周期](./img/1.png)
####检查当前文件状态
要确定哪些文件当前处于什么状态，可以用 git status 命令。
####跟踪新文件
`$ git add README`跟踪 README 文件

####暂存后的文件发生修改，仍需重新`git add`

####忽略某些文件
例子：
```
$ cat .gitignore
*.[oa]
*~
```
第一行告诉 Git 忽略所有以 .o 或 .a 结尾的文件。一般这类对象文件和存档文件都是编译过程中出现的，我们用不着跟踪它们的版本。第二行告诉 Git 忽略所有以波浪符（~）结尾的文件，许多文本编辑软件（比如 Emacs）都用这样的文件名保存副本。此外，你可能还需要忽略 log，tmp 或者 pid 目录，以及自动生成的文档等等。**要养成一开始就设置好 .gitignore 文件的习惯，以免将来误提交这类无用的文件**。
>文件 .gitignore 的格式规范如下：

>+ 所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略。
+ 可以使用标准的 glob 模式匹配。
+ 匹配模式最后跟反斜杠（/）说明要忽略的是目录。
+ 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。

例子：
```
# 此为注释 – 将被 Git 忽略
# 忽略所有 .a 结尾的文件
*.a
# 但 lib.a 除外
!lib.a
# 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
/TODO
# 忽略 build/ 目录下的所有文件
build/
# 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
doc/*.txt
# ignore all .txt files in the doc/ directory
doc/**/*.txt
```

####查看已暂存和未暂存的更新
要查看尚未暂存的文件更新了哪些部分，不加参数直接输入 git diff
若要看已经暂存起来的文件和上次提交时的快照之间的差异，可以用 git diff --cached 命令。（Git 1.6.1 及更高版本还允许使用 git diff --staged，效果是相同的，但更好记些。）

####提交更新
可以直接`git commit`，这种方式会启动文本编辑器以便输入本次提交的说明。
可以用 -m 参数后跟提交说明的方式，在一行命令中提交更新

####跳过使用暂存区域
尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁琐。Git 提供了一个跳过使用暂存区域的方式，只要在提交的时候，给 git commit 加上 -a 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 git add 步骤：


####移除文件
要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除），然后提交。可以用 git rm 命令完成此项工作，并连带从工作目录中删除指定的文件，这样以后就不会出现在未跟踪文件清单中了。


另外一种情况是，我们想把文件从 Git 仓库中删除（亦即从暂存区域移除），但仍然希望保留在当前工作目录中。换句话说，仅是从跟踪清单中删除。比如一些大型日志文件或者一堆 .a 编译文件，不小心纳入仓库后，要移除跟踪但不删除文件，以便稍后在 .gitignore 文件中补上，用 --cached 选项即可：
`$ git rm --cached readme.txt`

####文件改名
在 Git 中对文件改名，可以这么做：
`$ git mv file_from file_to`





















###git-忽略指定文件
[参考资料](http://www.cnblogs.com/eddy-he/archive/2012/03/08/git_ignore_file.html)
语法
>.gitignore 的语法规范如下：
>·所有空行或者以注释符号 ＃ 开头的行都会被 Git 忽略；
>·可以使用标准的 glob 模式匹配。 * 匹配模式最后跟反斜杠（/）说明要忽略的是目录。* 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反。
>
>glob 模式匹配：
　　·星号（*）匹配零个或多个任意字符；
　　·[abc] 匹配任何一个列在方括号中的字符（这个例子要么匹配一个 a，要么匹配一个 b，要么匹配一个 c）；
　　·问号（?）只匹配一个任意字符；
　　·[0-9a-zA-Z] 在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配（比如 [0-9a-zA-Z] 表示匹配所有 0 到 9 的数字和所有字母）；
　　·\ 转义字符。

例子：
```
# 此为注释 – 将被 Git 忽略
    # 忽略所有 .a 结尾的文件
    *.a
    # 但 lib.a 除外
    !lib.a
    # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
    /TODO
    # 忽略 build/ 目录下的所有文件
    build/
    # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
    doc/*.txt
```

### 重命名文件
`git mv old_name new_name`

###查看历史记录
`git log`

###git push
git push 命令默认是不会 push Tags 的，需要加参数。
