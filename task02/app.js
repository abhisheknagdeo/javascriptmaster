
	$("document").ready(function() {
		buildBookmarks('h2', 'toc');
	});

	function buildBookmarks(strWhichTag, sBookMarkNode) {
		var i;
		var cAnchorCount = 0;

		// create the list that will hold the bookmark links
		var oList = $("<table class = 'bookmarksList' id='bookmarksList'>");
		oList.append("<thead><tr><th>Sr.No.</th><th>Topic</th></tr></thead><tbody>");

		// for each one of the header tags, create a new named anchor and insert it into
		// the header tag. Then add a new link to the list that points to the named anchor
		$("div:not([id=header]) " + strWhichTag).each(function() {
			$(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
			oList.append($("<tr><td>"+ cAnchorCount +"</td><td><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></td></tr>"));
		});
		
		oList.append("</tbody></table>");
		
		// now find the ID of the bookmark container and append it
		$("#" + sBookMarkNode).append(oList);
	}
	
	
	
	