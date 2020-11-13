/**
 *GET show user dashboard
 */
exports.showDashboard = (req,res) =>{
    res.render('index', {
        column:'myTournament'
    })
}

exports.showMatchList = (req,res) =>{
    res.render('index', {
        column:'tournamentList'
    })
}