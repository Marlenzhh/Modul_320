import java.util.Scanner;

public class UserMenu {
	
	//used attributes
	
	public static Scanner scan = new Scanner(System.in);
	public static Auction auction;

	public static void main(String[] args) {
		
		 auction = new Auction();
		 createMenu();
	}
		
		
		
	public static void createMenu() {
			  
		  boolean exitMenu = false;
		  
		  while(!exitMenu) {
		  System.out.println("\nWelcome to the Auction\n\n");
		  System.out.printf("Please enter the [option] you want to use:\n"
				  + "[add] lot\n" + "[bid] for a lot\n" + "[show] all lots\n"
		  );
		  
		  // scan what user wants to do
	      String whatToDo = scan.nextLine();
	      
	      // check what 'whatToDo' string contains and call respective method
	      switch (whatToDo) {
	      
	      case "add":
	    	  createLot();
	    	  break;

	        case "bid":
	          bidLot();
	          break;
	    
	        case "show":
	          show();
	          break;
	          
	        case "end":
	          boolean sureToEnd = endProgram();
	          if (sureToEnd == true) {
	            exitMenu = true;
	          }
	          break;

	        // if 'whatToDo' string doesn't match any option, print error message
	        default:
	          System.out.println("   Error: option '" + whatToDo + "' is invalid.");
	          break;
	      }
	      }
			  
		}

	
		  private static void bidLot() {
		
			  System.out.println("Enter lot id:");
			  int id = Integer.parseInt(scan.nextLine());
			  System.out.println("Enter your name:");
			  String name = scan.nextLine();
			  Person p = new Person(name);
			  System.out.println("Enter your bidding price:");
			  long price = Long.parseLong(scan.nextLine());
			  auction.makeABid(id, p, price);;
		
		  }



		private static void show() {
			  
			  auction.showLots();
		  }



		private static boolean endProgram() {

			  //handle ending of application
			  
			return false;
		}

		  
		private static void createLot() {
			  
			  System.out.println("Add description:");
			  String desc = scan.nextLine();
			  System.out.println("Starting price:");
			  long price = Long.parseLong(scan.nextLine());
			  auction.enterLot(desc, price);
			 
		}
		  
		  


}


