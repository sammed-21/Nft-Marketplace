import EmptyState from "@/src/components/EmptyState";
import NFTCard from "@/src/components/NFTCard";
import useNFTMarket from "@/src/state/nft-market";
import useSigner from "@/src/state/signer";

const OwnedPage = () => {
  const { signer } = useSigner();
  const { ownedNFTs, ownedListedNFTs } = useNFTMarket();

  const notConnected = !signer;
  const loading = signer && !ownedNFTs && !ownedListedNFTs;
  const empty =
    signer &&
    ownedNFTs &&
    ownedListedNFTs &&
    ownedNFTs.length == 0 &&
    ownedListedNFTs.length == 0;
  const loaded =
    signer &&
    ((ownedNFTs && ownedNFTs.length) ||
      (ownedListedNFTs && ownedListedNFTs.length));

  return (
    <div className="flex w-full flex-col">
      {notConnected && <EmptyState>Connect your wallet</EmptyState>}
      {loading && <EmptyState>Loading...</EmptyState>}
      {empty && <EmptyState>You don&apos;t own any NFTs</EmptyState>}
      {loaded && (
        <>
          {/* owned nft*/}
          <div className="flex flex-wrap">
            {ownedNFTs?.map((nft) => (
              <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id} />
            ))}
          </div>

          {ownedListedNFTs && ownedListedNFTs.length > 0 && (
            <>
              <div className="relative my-2 h-[1px] w-full flex-shrink-0 bg-black">
                <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform bg-white px-2 font-mono font-semibold">
                  LISTED
                </div>
              </div>
            </>
          )}

          <div className="flex flex-wrap">
            {ownedListedNFTs?.map((nft) => (
              <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OwnedPage;
