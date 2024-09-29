import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { AiOutlineRetweet } from "react-icons/ai";
import { PiUploadSimple } from "react-icons/pi";

type Props = {
  userName: string;
  userAvatar: string;
  content: string;
  imageLink: string | null;
  name: string;
};

const FeedCard = (props: Props) => {
  return (
    <div className="p-2 border-b border-slate-900 grid grid-cols-12 hover:bg-neutral-800 h-fit transition-all cursor-pointer">
      <Image
        alt="Ava"
        src={
          "data:image/webp;base64,UklGRsAWAABXRUJQVlA4ILQWAAAwjgCdASo4ATgBPoVAm0qlI6Iro7HKYXAQiWcFFj4Diip3bT9Q/6D10GFunJnk7v/3PPfCGMRVmKPU//Xnq/hv/WONS+KGrfqdrnz0R2URH6CuM89ZYJJ2+F9nbOG0rlFY/MsD774Y1xR4W0TmiGeKS87F21xgMjngS7ibgL2o/cW+mPvYbOAzd/SlSZ5bKaQikU/CoPRCKOCAUrQqV4ExNb/v0S66aZ/Ss/cQSiTw9GRb6FQz++K1biBJTKrvIVbbJmocwqk4CLgzV6TGC7lQHJsIi+8zQheINlNfqcdkdjJFeMuhnS1Zy+uSiL21a+I3DOOOHonrTof2luMTCzVfrNHK5uBWTl3SFgDdwc2WH3wJMf26yOoWN247rt5cMS7reDD5daexBYL25VNwdfxGeUZ1yXztXwi/auwvrHC/4OUL4XjFAYLDDWwB3p9CQBXcIpv7KYyrv5/xk/XOtklpBKp9RkOsATvAcU/hjNbFy0oe+fxo2th65Vw22fgGvxgMATIIS5H+TZ2ooF5SCRDMdoAYyWWfQE/lm8jxSp2UThpEESaIBH66ChfMBU8RjjILUtXw8y7QXdx/NPutvrSghSJManikroXonuu8xJ75nRSkZ4veGIbfFRXCWrEcxwOSneZO4wf8Pc0lJo5RtIvB9cJ5ATlmpiaSQj/7LfkcM1hoD38HZEmaLWw2gZHiup2apuvL9TG1mUxsAreGM2WSiLZWFYHz3xRmvKJqIiTQ+UGTeaY/yqSKAyAEnjn7e3C9o+IjOUJRVMhv75HzQY9yJFxVwBoASR6rCb9XPwcw5U9pef2KR8BjbVPwbaqFu6Xb95zhuN9urevd4uHCFJMN+5ESs2DuG3pFhkWLsGLVm0LXTcQWwNhTIyLpW/zrbyCELT4Hfi6yeo+I1n8gIjIfY2eu+gh0iaLONLP7baNQ040ToyvwYuM9Qt4rQOinlWayzjed6IRZhv6/qrxsGHq2a3A8odyutj2TnpFSvtbbifKky8Mt1ZB2AsUx1uqJ971xawbtAZov505GfpcMUSsJVfcWpz36/Q76qeBFW0AR/uYgqrB1Rlz/EWISWfAEQ0PRH5rVwr2ktvy9FY8ZLaUsS5k8GVteJLCZPAhO1+3cRAXuFn4bQTU8hzH5MH2Hb3vn/crldWjLWCSvjNbsiq36JfPd9Gk150wcRXDE1fHt/LKmaQfHBlEIPk+LYXgMyg3KXkqxonwCZhAHMm4/8c4f+FYX4sX1OmnzxFvm3Ey4LQeSQp20Cy+5G4BXQqp2y4lLsMTsSTm3zpw112n6fLOpEDkw1AF8+PcpyKBHyhBpPOf7FOIonAhg8jN+s0upcH8B1UI47Z4xUSG9nfYhQVqrs/lPzHuZAKqrg1DqsS0t45nwSsZXAU8UxBMaTUXB6xoCWm3tbqnx9kSCqynzpNF4yRQUbb2J/E4BrmU86ybSnlM1MgY5CQg1cjsfXAa7VunNGLpVJBNZwiYxqDUSrdrt6wHNKfwgoVeQ7rzyoUlGkDYj7vICLTJE54AA/vizh2AvgJaPsSoOcF6fL0DjUKFaT8oQNRIhZ3cd4ubg+KVYEoQp+usDgVZFr/k6U2T/5ljMgOT6d5uYssHDVwg6SgYiglcrX2ic/1TqKl7JPYOm6ldx/J1i550jcQ2nIRMdJ6IDsxGDFtXJ/swtV5lC0/ksIzMEcljYdNyGRpOm35oIeP/qtEXRVIPR2D/RXH2F04vNECphoS5kXW+s7ryl9ve8nl8wA/ymzJsOSMzlMLx5hj3bP6JUcIm+MKYuHdFZSwbbzZxcxJnGkw+D7RvOcs6gQsxygTMgAzpWeK9sDKVyE0AQ1fgDKCN4pv18pQfYkUESWxc7H1eBJz2w/YzohmCJM9ujb/POOdodm/780SoAmNiN1Od23MInAXB1xyvD4YnbDn7bLmzRk7QNlBG+Niqz4tgAjL0gE752CBgLUYPHyhrpUGD5kXAWfGLO5fun5WW/NCyjFZak/DsUrsLCBiDRI8M+a2GHVNbpcFMsvUYMokY8Diczi1yPPCjilUFlaxERQR+7KfFdizxfaA3fOeB0whyAJlFLhGsksvoAGHHtmNGEc+6deeKcKjOtPoEd9FO526sVYd6Il4M6eDjhLCz3F4UeAO+reMBVOz9IQHGqqKxUeEdAiBkWnT+WDrvlAOJaJuR3ki3gSOurVuPBEHKJJaEsVib0oKFl2mod/+IzRr/ghppR/ZNF7tbYW+PcmMu1OEULJWBz8DpBgm7I/oNsoQn+1mUrNQJoljGOH08YgZ+sUBEAUFnGOB0ibAkCwg78Z2kzxxfvqCBgpc9JObmI21kwvsQULxcWVskwcfq0xzfMbNBCXLSbkBz7AgpN7YIMGKHEpvmZ1PurWJsOIVfS/3TcWqAMw3ljAtRMeD1UNKPneAVP1oaz5e8+Rl+v5IPZmh7/QFut+LMAvOGXa9NaoaJPJTlq0SWHnbBW4HSWDAe8/+TkcxgaZx5tcK3qwRVemgoUXRxqyto4ku5YDaTn3ez8E+PmHWcFIS6vpR8np3v3FWlluGVM797TnHUAzwKo/Z1aX7RymCDOMRBi37mjTUmE95q/GjeZbqgKdbsTUHGzNoY3hjLBG4PwYVJfcqmjyN1mHktjA3OpoDkCZ9Q8hzZwFFlSbZgxfMNlpXVoYmFgkXzMfoIzshjPKx2lHWRzArUTHM4r4cPNpOnHhqCOuDezhvEOs8oYDmFSlXpLEsTp1suTPrVmIoe60lWW3jR/lSj7l1aTb4eoRyDOosTKyzRNOMDGkK7Kno9PRXajD07Mg9sj5CX/ujBjZayx9+hxNrzBtCBe0q5vzycIphfL8UtDGeVg1t5FOF/hQOGQq0xBDhofvoHP9uqtyQ9xMGDa5z5vr5HP+dte/icqQLvXvOYI2tyOpEcIeTmCzlBdhmqKH2SZeqxdju/tz/v4whJB0Mc8zkwIAon8BAKfXdMvnQJgRUETldJbl+CZ8eWIyo3f7c981zDFVZsZ63L1jHVbygg0Ia6qtdXH6iogrxapAi8WBEyqZO63wp+IpLof/ntuWdpQ+d38KsXJt9z3NhWM3V5mf0jarOdtNZ8YCwfYlkQU2o/fYas+sBne7+D7NBv88nzZVateCQUXaWCiiQO37XI7p/a0wqV95bbBfuWEgmvaavy3zyUNcKWmyu0motdDiaG6HY2B58pswu65kq8zu0IhqsqP6aTlh0QSUUcZTmEuw6AV3WGmw0EgVhRgIVGU11RWAB3itQB5J93Kr5UrKf+JewoX4/kGzzIg8TpD1NoKFPRMsT4QqcBUXwXXiPm3I+Yq1xMlQU7l8djirPl3s9WQoOYFSgy7u/MieiCzLQwSASdaaGIYn0s0gIcPMrgjumUfkra/0YHCxt3f66vkXz0JBjRMg/S2qNebFz8qG+3xv8UoXxYQ6YI4CtImkO1ERqPWc+CdpazruwFSxUqDR5mIctjZ8LSnPXKAzOkIk06xH9WTfP1AEjKVm7+6KMXYUk9ZFetTiq/dLNsxQKBI86ZTeDMK9Fe8nSwRw3Y1Iim2eUfhUQgHcdcZ0AdkPz+8TsChQ1/BDWqw46EvH9GJHGiyzEjLPnnl1ZnQKzfzmLXnDWJvyhxId2dyj6hDVIZggEqn/A8cGjYj5m/EQZFX/IE8aHhKM726uS/LmQFMKY1RtJO4J7DYsIjbJe/JLG9JPmOyHykd0OdWGarDHDrmsEs3hT4g+xsArqkiC/NuhkqpAU0PVp2kR8CdvTDBpIhehczsDNmpwwNxlSwdbO5EMNOdQr0CZwbp7bmRxoW6wCz4+bkvSa1qzVz2JzHg4slopTdj6xtLOk+1PyJ7KNiaN3sKm8YNuu1gPUvADLc9LdT8QNbRFLRViyPatSFVHBSjv3XcNRxJwQco4e8rcFUHU5Sc9RJACiDP3DGoZEk9+s3Nxl1qOHHjimoyfpIReqlmvlbRAxylTies9xgwALHrPkIuRuwM7mUPtWh2pkTrbaaDv/ABoBNDrtrvQWxVybJz0PhWhcwBCAtABeee+81+XQTliEIFFKbRbeQfBEah1LWhqxjiD0buafj/lpITSZTOCiQfcIKZHEwfJlGdDDBRsvzCfns/j5vF5KsJufq5ZBKZ09sKs0mVBgklBP4rQK8u72OC+Fpm4Rgr0YT2/hCS4YGcpxxxccXaEkj8E24cSsG+Sy7lzCKqraMem49j2zuIpb3uLvHTwRNPrKMOKWnw4i+WTmVc6Xyso3jbBHgwHuL1cRjeOIfFHXb+CBN0Kwz9WX+6lt8KaL5+tPABBO/hDQMs3pvLCfFkEFzZiMCbcQHfrUMp1Nk3odipC1x/vvaxfdxu4OB14YezSPoHh0CdfGCujHMtj08dV6tzSZpQy/9+zBYgefmyGWcbSvqY8rir+AjjjAUC3yyIj3faUjRGbsovbUhZwg/glnBZ/kUziycA4HudJxz4NBPQqzrXYnvBeQ/CvUzBCJmbi5uuy/FhMyslI5xetRPaPoW5idmUvmexFuXCevCS54nzzrmeWCxumjF0qLlTnjK6DlubsMZx5yTuvZbxf4NSqIjJ9dfv4vtbHbGRTJLYSpwaiTNxASkTLXi+v51UQoufjOoiJTGtoo9pMKi+gIU9QQpRZQINATHqjK+0un+CCyFPL3aiEYPxmCtvnK5EgTJXsNbz9ZVhR41izzSXNX1KtrMz2kWlhR2hHUBFSsZs8WbZP1Z9ceQRp0YAHC03/aUsPKDejF4tfCr3YyLMCypVfuAaFwvSxY0YGG1OZY8tN797e9DPrZtks0F6+y7POm+EHsLb9AlzU/TnPsTxM1vZ+2L5cuVeJxfRPNJLhTb/RZTHfqphC2HUl5MWehafOFDwr8lItNHFCqihDjDYn/4BQZugVGrAfPdrWUOxRdUPUeYf+4WNB9vHEU88jhLh1ei/BsMhr64RYsSkxrjhla3p1BX7hDgess3ry/gu8Dak23EuYHknpEraavXw4l5RHJuHbVtjY/VHW8o/MdHFvQVjwlS5G/JszHNjBQ2RY/wZDVUIWB7kGk81o3ZiOkYM/H6tJA2Yv/tj6WrkjD2lo9hbQCSD2mWOsDU/KVlYCjBmYmyyaKYWSxMuTgxxCz9OTjegQOoed/77tUW1+IElhGwJr2jhxe+7swmlZEk8UvGXmVPIULYDtiSGbb1SZ35pM+ycy0LTLA05vXIBRE+FN5bVrrEQVa/v7TqgBMiF0UKTvlrEV+qSMk00Ze/vHz6e2d3n+d2yZflPslcJyLVzRF4vJ77i/+13AVl93eV/iYoIeNygjRAatlC5tAySm4Lntl/Xi9JU39CiiIgsExNfmCA39QnG1YwkjFAaNk/nSF0kVhutnkqVVumQw7IlWifZ4ctJQ6pf9mvlzTHszdxwobli5ziAjj5tLvVWbfX8u/cNQoSyLu3X3fitjacXV+6fgi9wJ9ewZL31+6W3rj3mOk196yBUIoTDsUAb7nbcEtpa1sgmuffcTD4F7DA+12E0ZVwbUADa2Za2BzigFx0vM3SSZNR5p3CYYT+FLbJ/XwLGn3piz2EKkX1JG0+pourxLrLq9ysTvtsVY56n3hdVohPvFvpuN1m8WNOVM3FnwBy8si17dU+yVwwBSqGtylbbeFmupsIamj8ax+lDEz0IIS7yyD4kgHRjdWAkUBe6eZymvuWYdrKrm0zo5bAGzrZODCc+PYBrOs2kZr8GYmec++tYMJyVXeSQztc+YpuPDUllf7wTJ8sPySf6gGtBgBW50U+jVrEGwb677TLW7m7w5wPWXuTAXoxYUDknb5RyxWGd0ep0Uv0pyaI3eJJ/7nJuQ9aHRtkAqV/k4pkEly2mdplBKJZg8K8mPqvctctIlw10+w1VkN+fpj8UWNJeAPR7czdtc7RCx797Qe/ve5Q8nQc+Q1mn12nhVSGnWb7oRfsABBU04TD0cKabCkAUXxRQOogXk4hFaflfFvPOD3g7VyecrrjwpY6xS49ndX8VduG8cLdyr6XB/WtgiS1HgquYAw3y/SSZvWhnoqgwDAQ/Uo8644CxztNSxE7sTYKa4TuFZO4dW3+HyqjomwvzVc4xg6qJBseostyNI1vIyIb1KYCYZgg8kQdq+WKVpSvl3Lqx8SWevIqpl4XiCRdRgv82LadvgbOk6F1YPuxFq/KMPU0Fv/fEpUY8k/CPbmS27sEgcw03F/XozLhLx8GhKbfjSQzAyismqndU6QE71Dq+04bX5b5KUt2whdrPuXQECIeFmJwEpNwVZwZs+v3p+0yqceECxZiLL7jOOyshu3KM17XVtnJEOnavUxLJuXsObSVysiK/z6QNbAVYAHn+TZ1i+o/aPasFUozpMzxUDVitp5gIwMKQeiENHitQmhhl0Xx/2KR04rVgOI7qRqn+Se4qusEDJrEcQi9M/AORKFwI1z702HWu5c0Aw7swHZQs4YKDZ967atdQY4A9x6X332krtIPL1hgJO0PpUhmus/Yax8Vw6Cywow0SAK+g1nYG2f7mX5e5ouae5Y6vZg0xtDZ9reTeb34pj37qL7T3GxH7TOm0lPg6+wBy1RfjGEYKDEbmToL+9ZS2C4YsamW7Dg1X75FrARuVqtnGwuLUr8hpRE3V6Pwio6pxM0mkzKVEBnMjRxk6txQjKecN/brF8kg6UGyFahPb16UjAKkOg+W94MfvDoreLg8LmesChK5cx34MfzxxzWZS92acRixyQbYWFcog/6km/isw7LxXS2ZGayYy2SZduqgGs6KaX76J06QR6SkYNdhKDJPKe5hb9uIFSsGsqwNqrFPXyQBzl5nuq4UVDx/pAO+SwDt7Oy13Avqty/U7qsgO7CWP8xkJsmxjsewLhNA6DPX2iqarAzAWm7eJrg7mbKuXOTsk4cfk2xDx3zZkt54NL1ycjoHtIEBAuzPh8YtNRVBZggvREje/ZSSyOnESZaJql9J1AJJ0gwWoRQScx9s+L1lThOheiPJlHamzYrVWulRtZkrwCgGrJTAOTMg53Yp9ia2J5X9IfNFF9YV5QBI7c5m2ZBX4zyzEe2ZOzDFfrxbR5cT+lHxKEj4HLzQEw1bffG+0sf3Xezr7iyiqP21V8cSe1+QJsLtGZZNKbNvmet6dUMrLzruwB/nYGIycIyUHTBYG2CpDzdSTG/l6fcNSe9bRK64CoKHc+wnAK+1B3MCrzxRTzbm8bkLirpb7S8nMQkGm8p5M4ys2uMe8jT9xdiqKXFfNfsUlUaBKHUVd7EsbgOKOcD+DBPk4jzZaQ97cAMtcYaZaVB4Uo3VUarFH6LB7GOSES9iGbghJNqeaamlK2PFjNIG6uND8LnQbswe4k+PCBrvdZD07qi4sFvbluSmOP8BNJTusYo7wBdIIzzA9rHI6cBhmtZK37cHGqTkC0+Zg0o2X9XHabPUIHc0EQvcJO7uVO7mdEK2RpKBZ74howMRej3Q3gd8ADmol4s/+GQjWgwUgyTrx424AA5t/78Obsq/5KzGFSUuVQt4dv4PNOwQLltptIi3mXiewpAtSMtfI+UpUdKVO/aU9nizlDcseszULGzMwfqYVGuMIkAiaqPiIcAEORL1b6D+KKKjXhZ/oBPbH/F5945i/e4V2Oiafhxy1eAVFN74e/Qlvq3ocomdsy05B2fRO0w9iebLKe3IVSNH+YZdaF5xoEpEMuuFAD8pqHtKIURhFXvlHHDDG2evLqx0HuxaH2nOHzAEcRI315K0KAx+R5drTnLY5N4NG8XfMBiWeh7nZB/jA5nQwAAAA"
        }
        height={100}
        width={100}
        className="rounded-full w-10 col-span-1"
      />
      <div className="flex flex-col col-span-11 px-2">
        <div className="flex gap-2">
          <h1 className="">{props.name}</h1>
          <p className="text-gray-500">{props.userName}</p>
          <p className="text-gray-500">Apr 27</p>
        </div>
        <p className="py-2">{props.content}</p>
        <div className="flex justify-between text-xl">
          <div className="p-2 hover:bg-gray-600 rounded-full size-fit">
            <CiHeart className="" />
          </div>
          <div className="p-2 hover:bg-gray-600 rounded-full size-fit">
            <AiOutlineRetweet className="" />
          </div>
          <div className="p-2 hover:bg-gray-600 rounded-full size-fit">
            <FaRegComment className="" />
          </div>
          <div className="p-2 hover:bg-gray-600 rounded-full size-fit">
            <PiUploadSimple className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
