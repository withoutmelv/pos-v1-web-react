function printInventory(inputs,items,promotions) {
    var diff=[];//数组去重，确定商品种类的数量
    for(var i=0;i<inputs.length;i++){
       if(!diff.includes(inputs[i])){
           diff.push(inputs[i]);
       }
    }
    var buy=[];
    var diffLen=diff.length;
    for(var j=0;j<diff.length+1;j++){
        buy[j]={
            barcode:"",
            name:'',
            num:0,
            unit:'',
            price:0,
            total:0
        }
    }
    var count=0;
    for(var i=0;i<inputs.length;i++){
        for(var j=0;j<items.length;j++){
            if(inputs[i]==items[j].barcode){
                if(buy[count].name==''){
                    buy[count].barcode=items[j].barcode;
                    buy[count].name=items[j].name;
                    buy[count].num++;
                    buy[count].price=items[j].price;
                    buy[count].unit=items[j].unit;
                }else if(buy[count].name!=items[j].name){
                    let jud=0;
                    for(var k=0;k<count;k++){
                        if(buy[k].name==buy[count].name){
                            buy[k].num+=buy[count].num;
                            jud=1;
                        }
                    }
                    if(jud==0){
                        count++;
                    }
                    buy[count].barcode=items[j].barcode;
                    buy[count].name=items[j].name;
                    buy[count].num=1;
                    buy[count].price=items[j].price;
                    buy[count].unit=items[j].unit;
                }else if(buy[count].name==items[j].name){
                    buy[count].num++;
                }
                if(i==inputs.length-1){
                    for(var k=0;k<count;k++){
                        if(buy[k].name==buy[count].name){
                            buy[k].num+=buy[count].num;
                        }
                    }
                }
            }else if(inputs[i].split('-')[0]==items[j].barcode){
                if(buy[count].name==''){
                    buy[count].barcode=items[j].barcode;
                    buy[count].name=items[j].name;
                    buy[count].num=Number(inputs[i].split('-')[1]);
                    buy[count].price=items[j].price;
                    buy[count].unit=items[j].unit;
                }else if(buy[count].name!=items[j].name){
                    let jud=0;
                    for(var k=0;k<count;k++){
                        if(buy[k].name==buy[count].name){
                            buy[k].num+=buy[count].num;
                            jud=1;
                        }
                    }
                    if(jud==0){
                        count++;
                    }
                    buy[count].barcode=items[j].barcode;
                    buy[count].name=items[j].name;
                    buy[count].num=Number(inputs[i].split('-')[1]);
                    buy[count].price=items[j].price;
                    buy[count].unit=items[j].unit;
                }else if(buy[count].name==items[j].name){
                    buy[count].num+=Number(inputs[i].split('-')[1]);
                } 
                if(i==inputs.length-1){
                    for(var k=0;k<count;k++){
                        if(buy[k].name==buy[count].name){
                            buy[k].num+=buy[count].num;
                        }
                    }
                }
            }
            
        }
    }

    
    var pro=[];
    var sum=0;
    for(var i=0;i<diffLen;i++){
        for(var x=0;x<promotions[0].barcodes.length;x++){
            if(buy[i].barcode==promotions[0].barcodes[x]){
                pro[sum]={
                    name:buy[i].name,
                    num:Math.floor(buy[i].num/3),
                    price:buy[i].price,
                    unit:buy[i].unit
                };
                buy[i].total=(buy[i].num-Math.floor(buy[i].num/3))*buy[i].price;
                sum++;
            }
        }
        if(buy[i].total==0){
            buy[i].total=buy[i].num*buy[i].price;
        }
    }

    for(var i=0;i<diffLen;i++){
        buy[i].price=buy[i].price.toFixed(2);
    }

    
    
    var head=`***<没钱赚商店>购物清单***\n`;
    var line=`----------------------\n`;
    var body=``;
    var total=0;
    var cheap=0;
    for(var m=0;m<diffLen;m++){
        body+=`名称：${buy[m].name}，数量：${buy[m].num}${buy[m].unit}，单价：${buy[m].price}(元)，小计：${buy[m].total.toFixed(2)}(元)\n`
        total+=buy[m].total;
    }
    var foot=`挥泪赠送商品：\n`;
    for(var x=0;x<pro.length;x++){
        foot+=`名称：${pro[x].name}，数量：${pro[x].num}${pro[x].unit}\n`;
        cheap+=pro[x].num*pro[x].price;
    }
    total=total.toFixed(2);
    cheap=cheap.toFixed(2);
    var end=`总计：${total}(元)\n` +
    `节省：${cheap}(元)\n` +
    `**********************`;

    var output=head+body+line+foot+line+end;
    
    return output;
};

export default printInventory