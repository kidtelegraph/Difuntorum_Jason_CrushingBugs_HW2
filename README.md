# Difuntorum_Jason_CrushingBugs_HW2
HW#2 Crushing Bugs MMED-1055

 Creating a drag and drop puzzle game using HTML, CSS and Javascript

    Goal of the Homework is to fix the bugs presented.

    First bug - puzzle pieces stack on each drop-zonez, only one puzzle piece should be place in one drop-zone at a time.  

    Solution: If this piece is place on the wrong drop-zone, must reset to the puzzle piece selection

    Under function handledrop i coded the if this* dragged.piece exceeds the length greater than 1 return it to default place.

    Second Bug - when a new puzzle board is selected, puzzle pieces still appear on the drop zones, the drop zone should be empty and there should be a new selection       of puzzle pieces.

    Solution - If new puzzle board is selected, drop zones must reset to empy and puzzle pieces should be changed.

    I figured it out by calling a constant backgroundID to this.id first, next is to specify the background image. 

    then for the drop zones i called a forEach loop in every (zone) and firstChild and the variables puzzlePieceDiv to appendChild which is the piece and piece to be       removed from the drop zone 

    also added the event listener for the resetbutton (resetBut)
