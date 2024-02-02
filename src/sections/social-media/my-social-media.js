import EmailIcon from '../../assets/icons/email.png'
import EmailWhiteIcon from '../../assets/icons/emailWhite.png'
import LinkedinIcon from '../../assets/icons/linkedinWhite.png'
import GithubIcon from '../../assets/icons/github.png'
import InstagramIcon from '../../assets/icons/instagram.png'
import InstagramWhiteIcon from '../../assets/icons/instagramWhite.png'
import GithubWhiteIcon from '../../assets/icons/githubWhite.png'

const MySocialMedia = [
    {
        id: 1,
        SocialMedia: 'Email',
        Icon: [EmailIcon, EmailWhiteIcon],
        HoverColor: ['#004f9f', '#003D7A', '#00478F'],
        order: 4
    },
    {
        id: 2,
        SocialMedia: 'Linkedin',
        Icon: [LinkedinIcon, LinkedinIcon],
        HoverColor: ['#0e76a8', '#0B5E84', '#0C6B97'],
        order: 3
    },
    {
        id: 3,
        SocialMedia: 'GitHub',
        Icon: [GithubIcon, GithubWhiteIcon],
        HoverColor: ['#2dba4e', '#28A445', '#2CB54C'],
        order: 2
    },
    {
        id: 4,
        SocialMedia: 'Instagram',
        Icon: [InstagramIcon, InstagramWhiteIcon],
        HoverColor: ['#E1306C', '#D61F5C', '#E02966'],
        order: 1
    },
]

export default MySocialMedia;
