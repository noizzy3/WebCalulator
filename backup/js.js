var q =	document.getElementById("disp");
var a=0;
function add(x)
{
	if(a==0)
	{
		if(x==11)
			{
				q.value=" ";
			}
		else if(x=='^')
			{
				q.value=eval(q.value);
				q.value+=x;
				a=1;
			}
				else
					q.value+=x;
	}
	else
		{
			q.value+=x;
			var g=1;
			var p=0,j=0;
			while(q.value[j]!='^')
				{
					p+=q.value[j];
					j++;
				}
			var h=q.value[j+1];
			for(j=0;j<h;j++)
				{
					g=g*p;
				}
			q.value=g;
			a=0;
		}
}
function ans()
{
	q.value=eval(q.value);
}

function mod()
{
	
	var p = q.value;
	p=eval(p);
	if(p>0)
		q.value=p;
	else
		q.value=-p;
}
