superbowlWin = (record) => {
  let result = record.find ( record.result==="W")
  return !!result ? result.year : undefined
}
