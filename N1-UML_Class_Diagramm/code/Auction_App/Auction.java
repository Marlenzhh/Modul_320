import java.util.ArrayList;

/**
 * A simple model of an auction.
 * The auction maintains a list of lots of arbitrary length.
 *
 * @author David J. Barnes and Michael K.
 * @version 2018
 */
public class Auction
{
    // The list of Lots in this auction.
    private ArrayList<Lot> lots;
    // The number that will be given to the next lot entered
    // into this auction.
    private int nextLotNumber;
    private ArrayList<Lot> biddedLots;

    /**
     * Create a new auction.
     */
    public Auction()
    {
        lots = new ArrayList<Lot>();
        nextLotNumber = 1;
        
        biddedLots = new ArrayList<Lot>();
    }

    /**
     * Enter a new lot into the auction.
     * @param description A description of the lot.
     * @param startingPrice The initial price of the lot.
     */
    public void enterLot(String description, long startingPrice)
    {
        lots.add(new Lot(nextLotNumber, description, startingPrice));
        nextLotNumber++;
    }

    
    //TODO: add method showLots()
    /**
     * Shows lots and bidding price if there is one
     */
    public void showLots() {
    	System.out.println("Showing lots:...............");
    	for (Lot l : lots) {
    		System.out.println("Lot: No:" + l.getNumber() + ", description: " + l.getDescription());
    		System.out.println("Price started at:" + l.getInitialPrice());
    		if (l.getHighestBid() != null) {
    			System.out.println("Bidding price: " + l.getHighestBid().getValue());
    		} else {
    			System.out.println("Currently no bidder");
    		}
    	}
    }
    
    
    
    //TODO: remove lot
    /**
     * Removes lot from current list and puts it into bidded list
     * @param lotNumber
     */
    private void removeLot(int lotNumber) {
    	
    	for(int i=0; i < lots.size(); i++){
			if (lots.get(i).getNumber() == lotNumber) {
				Lot l = lots.get(i);
				System.out.println("removed lot with id " + lotNumber);
				lots.remove(i);
				biddedLots.add(l);
			}
		}
    }
    
    
    /**
     * Here the Person makes a bid for a lot.
     * A message is printed indicating whether the bid is
     * successful or not.
     * 
     * @param lotNumber The lot being bid for.
     * @param bidder The person bidding for the lot.
     * @param value  The value of the bid.
     */
    public void makeABid(int lotNumber, Person bidder, long value)
    {
        Lot selectedLot = getLot(lotNumber);
        if(selectedLot != null) {
            Bid bid = new Bid(bidder, value);
            boolean successful = selectedLot.bidFor(bid);
            if(successful) {
                System.out.println("The bid for lot number " +
                                   lotNumber + " was successful.");
                removeLot(lotNumber);
            }
            else {
                // Report which bid is higher.
                Bid highestBid = selectedLot.getHighestBid();
                if(highestBid != null) {
                	System.out.println("Lot number: " + lotNumber +
                                   " already has a bid of: " +
                                   highestBid.getValue());
                } else {
                	System.out.println("No bid yet and yours is below starting price");
                }
            }
        }
    }

    /**
     * Return the lot with the given number. Return null
     * if a lot with this number does not exist.
     * @param lotNumber The number of the lot to return.
     */
    public Lot getLot(int lotNumber)
    {
        if((lotNumber >= 1) && (lotNumber < nextLotNumber)) {
            // The number seems to be reasonable.
            Lot selectedLot = lots.get(lotNumber - 1);
            // Include a confidence check to be sure we have the
            // right lot.
            if(selectedLot.getNumber() != lotNumber) {
                System.out.println("Internal error: Lot number " +
                                   selectedLot.getNumber() +
                                   " was returned instead of " +
                                   lotNumber);
                // Don't return an invalid lot.
                selectedLot = null;
            }
            return selectedLot;
        }
        else {
            System.out.println("Lot number: " + lotNumber +
                               " does not exist.");
            return null;
        }
    }
}
