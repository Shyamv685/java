import java.lang.System;
import java.util.Scanner;
class hello{
    public static void main(String args[])
    {
       Scanner scan  = new Scanner(System.in);
       int[] marks = new int[5];
     for( int i=0; i<=4;i++)
     {
        
      marks [i] = scan.nextInt();
       
     }
     for( int i=0; i<=4;i++)
     {
        
     System.out.println( marks [i] );
       
     }
    }
} 