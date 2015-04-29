using Bridge;

namespace ClientTestLibrary
{
    //[#62] - check file name outputs
    [FileName("markUpCheckRequired.js")]
    public class CI1 { }

    [FileName("MarkUpCheckRequired.js")]
    public class CI2 { }


    //[#69]
    [FileName("markUpCheckRequired.js")]
    public struct Point69
    {
        public int x;
        public int y;

        public Point69(int y1)
        {
            this = new Point69();
            y = y1;
        }
    }
}
