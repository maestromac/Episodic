module.exports =
{
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0,0,0,.6)',
  },
  content: {
    position: 'relative',
    display: 'table',
    width           : '280px',
    overflowX        : 'auto',
    overflowY        : 'auto',
    height          : 'auto',
    minHeight          : '340px',
    margin          : '85px auto',
    border          : '1px solid #ccc',
    padding         : '0',
    opacity         : '0',
    transition      : 'opacity 0.5s',
  }
};
