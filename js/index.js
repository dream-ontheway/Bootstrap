var modal = {
	modal_dialog : function() {
		$("#modal_dialong").modal('show')
		//打开模态框时触发（模态框不可见）
		$("#modal_dialong").on('show.bs.modal',function(){
			console.log('打开模态框时触发（模态框不可见）')
		})
		//打开时(模态框可见时)触发事件
		$("#modal_dialong").on('shown.bs.modal',function(){
			alert("你打开了模态框")
		})	
		//关闭时触发（模态框可见）
		$("#modal_dialong").on('hide.bs.modal',function(){
			alert("你关闭了模态框")
		})	
		//hidden.bs.modal
		$("#modal_dialong").on('hidden.bs.modal',function(){
			alert("你关闭了模态框(模态框不可见)")
		})	
	}
}